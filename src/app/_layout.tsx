// app/_layout.js
import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
// import 'react-native-gesture-handler';

export default function RootLayout() {
  return <Slot />;
}
