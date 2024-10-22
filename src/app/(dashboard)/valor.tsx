import DescongeladoSalmuera from "@/ui/forms/Salmuera/RC_CC_15";
import PeladoFrescoScreen from "@/ui/forms/ValorAgregado/RC_CC_103";
import { View, Text, Button, StyleSheet } from "react-native";

export default function InformesScreen({ navigation }) {
  return (
    <View style={styles.container} className="bg-body-light dark:bg-body-dark">
      <PeladoFrescoScreen />
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
