import DescongeladoSalmuera from "@/ui/forms/rc_cc_15/DescongeladoSalmuera";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container} className="bg-body-light dark:bg-body-dark">
      <Text style={styles.text}>Pantalla de Perfil</Text>
      <Button title="Volver a Inicio" onPress={() => navigation.navigate("Home")} />
      <DescongeladoSalmuera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
