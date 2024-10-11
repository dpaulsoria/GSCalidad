import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  FlatList,
  View,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from './db'; // Asegúrate de que el archivo 'db/index.js' esté correctamente configurado
import { UserOffline } from './db/model/user';
import { getAll as getAllUsers, create } from './db/methods/user';

export default function HomeScreen() {
  const [users, setUsers] = useState<UserOffline[]>([]);
  const [newUserEmail, setNewUserEmail] = useState<string | null>(null);
  const [newUserName, setNewUserName] = useState<string | null>(null);

  // Función para cargar los usuarios desde la base de datos
  const loadUsers = async () => {
    try {
      const allUsers = await getAllUsers();
      console.log("Get all", allUsers);
      setUsers(allUsers);
    } catch (error) {
      console.error('Error al cargar los usuarios:', error);
      Alert.alert('Error', 'Error al cargar los usuarios.');
    }
  };

  // Cargar usuarios cuando la aplicación arranca
  useEffect(() => {
    loadUsers();
  }, []);

  // Renderizar la lista de usuarios
  const renderUser = ({ item }: { item: UserOffline }) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
    >
      <Text>Nombre: {item.userName}</Text>
      <Text>Email: {item.userEmail}</Text>
      <Text>ID: {item.id}</Text> {/* Aquí verás que el ID es UUID */}
    </View>
  );

  const createUser = async () => {
    if (newUserName && newUserEmail) {
      console.log(newUserName, newUserEmail);
      const newUser = await create({
        cedula: "Cedula",
        userName: newUserName,
        userUsername: newUserName.toLocaleLowerCase(),
        userEmail: newUserEmail,
        userActivo: 1,
        userPassword: "password",
        rolId: 44,
        planta: null,
        area: null
      });

      console.log("User created", newUser);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>CRUD de Usuarios</Text>

      <View>
        <TextInput
          placeholder="Nombre de usuario"
          value={newUserName}
          onChangeText={setNewUserName}
          style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Email de usuario"
          value={newUserEmail}
          onChangeText={setNewUserEmail}
          style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
        />
        <Button title="Crear Usuario" onPress={createUser} />
      </View>

      <Text style={{ fontSize: 18, marginVertical: 20 }}>
        Lista de Usuarios
      </Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id} // El ID es generado automáticamente por WatermelonDB
        renderItem={renderUser}
      />
    </SafeAreaView>
  );
}
