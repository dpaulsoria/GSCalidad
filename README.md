# Sincronización con la Base de Datos Remota

Las tablas que realizan **pull** (hacen mirror con la base de datos remota):

## Usuarios
1. **User**

---

## Listas
1. **Áreas**
2. **Colores**
3. **Importadores**
4. **Maquinas**
5. **Marcas**
6. **Proveedores INP (Camaroneras)**
7. **Tallas**
8. **Tipo de Corte**
9. **Tipo de Producto**
10. **Tipo de Producto Embarque**
11. **Tipo de Registro Estado**
12. **Unidad de Peso**
---

## Navegación
1. **Áreas Proceso**
2. **Plantas**
3. **Tipo de Registro**

---

## Pivote
1. **Registros Área**
2. **Registros Planta**

---

## Firmas
1. **Firmas**
2. **Registros Autorizados**
3. **Registros Fallidos**

---

## Tablas que realizan **push**
- Todos los registros (no realizan **pull**, solo **push**, ya que no hacen mirror con la base de datos).
## Inicializacion de timestamps en la BD Remota
Realizados hasta la fecha:
```sql
-- Usuarios 
select * from a26401_offline_data;
-- Navegacion
select * from a26401_plantas;
select * from a26401_areas;
select * from a26401_cc_tipo_registro;
-- Listas
select * from a26401_sp_areas;
select * from a26401_sp_colores;
select * from a26401_sp_tipo_corte;
select * from a26401_sp_tipo_producto;
select * from a26401_control_calidad_embarque_tipo_producto;
select * from a26401_cc_estado_registro;
select * from a26401_sp_unidad_peso;
select * from a20t1;
select * from a20t3;
select * from a20t6;
select * from a20t7;
select * from a26t33;
-- Pivot 
select * from a26401_registros_por_area;
select * from a26401_registros_por_planta;
-- Signatures
select * from a26401_firmas_cc;
```
Query para agregar timestamps en produccion 

```sql
ALTER TABLE a26401_firmas_cc
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
ADD COLUMN deleted_at TIMESTAMP NULL;
```

Query para agregar timestamps en pruebas 

```sql
ALTER TABLE tablaX
ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT '2024-01-01 00:00:00',
ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT '2024-01-01 00:00:00',
ADD COLUMN deleted_at TIMESTAMP NULL;
```

Nota: Recordar agregar $timestamps true en los modelos respectivos
