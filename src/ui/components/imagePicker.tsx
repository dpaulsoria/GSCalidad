import React, { useRef, useMemo, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import * as MediaLibrary from "expo-media-library";
const ImagePickerBottomSheet = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%", "75%"], []);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [photos, setPhotos] = React.useState([]);

  // Función para obtener las fotos del dispositivo
  const fetchPhotos = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const media = await MediaLibrary.getAssetsAsync({
        first: 100,
        mediaType: ["photo"],
      });
      setPhotos(media.assets);
    } else {
      alert("Permiso denegado");
    }
  };

  // Manejar cambios en el Bottom Sheet
  const handleSheetChanges = useCallback((index) => {
    if (index >= 0) {
      fetchPhotos();
    }
  }, []);

  // Abrir el Bottom Sheet
  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handleOpenBottomSheet}>
        <Text>Seleccionar Imagen</Text>
      </TouchableOpacity>

      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, marginTop: 20 }} />}

      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} onChange={handleSheetChanges}>
        <View style={{ flex: 1, padding: 10 }}>
          <ScrollView contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}>
            {photos.map((photo, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedImage(photo.uri);
                  bottomSheetRef.current?.close();
                }}
              >
                <Image source={{ uri: photo.uri }} style={{ width: 100, height: 100, margin: 2 }} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ImagePickerBottomSheet;
