import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mi Custom Drawer</Text>
      </View>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate("home")} />
      <DrawerItem label="User" onPress={() => props.navigation.navigate("profile")} />
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#c6cbef",
            width: 240,
          },
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "Home Screen",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "User",
            title: "Profile Screen",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
