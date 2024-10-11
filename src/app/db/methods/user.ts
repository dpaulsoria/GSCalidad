import database from '../index';
import { UserOffline, name } from '../model/user';

// Colección tipada como UserOffline
const userCollection = database.get<UserOffline>(name);

// Crear un nuevo usuario
const create = async (userData: Partial<UserOffline>) => {
  try {
    await database.action(async () => {
      await userCollection.create((user: UserOffline) => {
        user.cedula = userData.cedula || null;
        user.userName = userData.userName!;
        user.userUsername = userData.userUsername!;
        user.userEmail = userData.userEmail!;
        user.userActivo = userData.userActivo!;
        user.userPassword = userData.userPassword!;
        user.rolId = userData.rolId!;
        user.planta = userData.planta || null;
        user.area = userData.area || null;
      });
    });
    console.log('Usuario creado exitosamente');
  } catch (error) {
    console.error('Error al crear el usuario:', error);
  }
};

const getAll = async (): Promise<UserOffline[]> => {
  try {
    const users = await userCollection.query().fetch(); // Query para obtener todos los usuarios
    return users;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    return [];
  }
};

// Obtener un usuario por ID
const getUserById = async (id: string): Promise<UserOffline | null> => {
  try {
    return await userCollection.find(id);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    return null;
  }
};

// Obtener un usuario por cédula (usando query)
const getUserByCedula = async (cedula: string): Promise<UserOffline | null> => {
  try {
    const users = await userCollection.query().where('cedula', cedula).fetch();
    return users.length > 0 ? users[0] : null;
  } catch (error) {
    console.error('Error al obtener el usuario por cédula:', error);
    return null;
  }
};

// Actualizar un usuario por ID
const updateUserById = async (id: string, newData: Partial<UserOffline>) => {
  try {
    await database.action(async () => {
      const user = await userCollection.find(id);
      if (user) {
        await user.update((u) => {
          u.cedula = newData.cedula || user.cedula;
          u.userName = newData.userName || user.userName;
          u.userUsername = newData.userUsername || user.userUsername;
          u.userEmail = newData.userEmail || user.userEmail;
          u.userActivo = newData.userActivo || user.userActivo;
          u.userPassword = newData.userPassword || user.userPassword;
          u.rolId = newData.rolId || user.rolId;
          u.planta = newData.planta || user.planta;
          u.area = newData.area || user.area;
        });
        console.log('Usuario actualizado exitosamente');
      }
    });
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
  }
};

// Actualizar un usuario por cédula
const updateUserByCedula = async (
  cedula: string,
  newData: Partial<UserOffline>
) => {
  try {
    await database.action(async () => {
      const users = await userCollection
        .query()
        .where('cedula', cedula)
        .fetch();
      if (users.length > 0) {
        const user = users[0];
        await user.update((u) => {
          u.cedula = newData.cedula || user.cedula;
          u.userName = newData.userName || user.userName;
          u.userUsername = newData.userUsername || user.userUsername;
          u.userEmail = newData.userEmail || user.userEmail;
          u.userActivo = newData.userActivo || user.userActivo;
          u.userPassword = newData.userPassword || user.userPassword;
          u.rolId = newData.rolId || user.rolId;
          u.planta = newData.planta || user.planta;
          u.area = newData.area || user.area;
        });
        console.log('Usuario actualizado exitosamente por cédula');
      }
    });
  } catch (error) {
    console.error('Error al actualizar el usuario por cédula:', error);
  }
};

// Eliminar un usuario por ID
const deleteUser = async (id: string) => {
  try {
    await database.action(async () => {
      const user = await userCollection.find(id);
      if (user) {
        await user.markAsDeleted(); // Marca el registro como eliminado
        console.log('Usuario eliminado exitosamente');
      }
    });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
  }
};

export {
  create,
  getAll,
  getUserById,
  getUserByCedula,
  updateUserById,
  updateUserByCedula,
  deleteUser,
};
