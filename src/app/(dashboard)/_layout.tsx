// src/app/(dashboard)/_layout.tsx

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Importa AntDesign desde @expo/vector-icons
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// Componente personalizado para el contenido del Drawer
function CustomDrawerContent(props) {
  const { bottom } = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <Image source={require("@assets/images/logoSPnslogan.png")} style={{ width: 200, height: 200, resizeMode: "contain", alignSelf: "center" }} />
        <View className="p-5">
          <Text className="text-lg font-bold">Mi Custom Drawer</Text>
        </View>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate("home")}
          icon={({ color, size }) => <AntDesign name="home" size={size} color={color} />} // Icono para Home
        />
        <DrawerItem
          label="User"
          onPress={() => props.navigation.navigate("profile")}
          icon={({ color, size }) => <AntDesign name="filetext1" size={24} color="black" />} // Icono para User
        />
        <DrawerItem label={"logout"} onPress={() => router.replace("/")} />
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#000",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <Text className="text-start">Footer</Text>
      </View>
    </View>
  );
}

// Componente principal de Layout
export default function Layout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#c6cbef",
            width: 240,
          },
          drawerActiveBackgroundColor: "#f5f5f5",
          drawerActiveTintColor: "#000",
          drawerInactiveTintColor: "#000",
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: -10,
          },

          headerShown: false, // Opcional: oculta el header si lo deseas
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "Home Screen",
            drawerIcon: ({ size, color }) => <AntDesign name="home" size={size} color={color} />, // Icono para la pantalla Home
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "User",
            title: "Profile Screen",
            drawerIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />, // Icono para la pantalla Profile
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
