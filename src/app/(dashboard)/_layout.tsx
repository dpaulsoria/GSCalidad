import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, useDrawerStatus } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Image, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { StatusBar } from "react-native";
export default function Layout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            width: 240,
            backgroundColor: "#F1F5F9",
          },
          drawerActiveBackgroundColor: "#e5e7eb",
          drawerActiveTintColor: "#000",
          drawerInactiveTintColor: "#000",
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "400",
            marginLeft: -10,
          },

          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="registros"
          options={{
            drawerLabel: "Home",
            title: "Home Screen",
            drawerIcon: ({ size, color }) => <Feather name="file-plus" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="informes"
          options={{
            drawerLabel: "User",
            title: "Profile Screen",
            drawerIcon: ({ size, color }) => <MaterialCommunityIcons name="file-chart-outline" size={24} color="black" />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props) {
  const isDrawerOpen = useDrawerStatus();

  const router = useRouter();
  return (
    <View className="flex-1">
      <StatusBar barStyle={isDrawerOpen === "open" ? "light-content" : "dark-content"} />
      <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ backgroundColor: "#1C2545" }}>
        <Image source={require("@assets/images/logoSPnslogan.png")} style={{ width: 170, height: 170, resizeMode: "contain", alignSelf: "center" }} />
        <View className="pb-5 px-5">
          <Text className="text-lg font-bold text-primary-light">User name</Text>
        </View>

        <View className=" flex-1 pt-8 bg-primary-light ">
          <DrawerItemList {...props} />
          <DrawerItem label="Cerrar Sesión" onPress={() => router.replace("/")} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
