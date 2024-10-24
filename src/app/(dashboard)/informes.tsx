import DescongeladoSalmuera from "@/ui/forms/Salmuera/RC_CC_15_Test";
import { View, Text, Button, StyleSheet } from "react-native";

export default function InformesScreen({ navigation }) {
  return (
    <View style={styles.container} className="bg-primary-light dark:bg-primary-dark">
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
