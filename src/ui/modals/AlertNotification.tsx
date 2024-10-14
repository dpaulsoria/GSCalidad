import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

interface AlertNotificationProps {
  title: string;
  message: string;
  visible: boolean | null;
  onClose?: any;
}

export default function AlertNotification({
  title = "Exito",
  message = "",
  visible = false,
  onClose,
}: AlertNotificationProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg w-3/4 shadow-md">
            <Text className="text-xl font-bold text-center mb-4 text-green-500">
              {title}
            </Text>
            <Text className="text-center text-gray-700 mb-4">{message}</Text>
            <TouchableOpacity
              onPress={onClose}
              className="bg-green-500 p-3 rounded-md"
            >
              <Text className="text-white text-center">Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
