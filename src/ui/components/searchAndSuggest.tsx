import React, { useState } from "react";
import { View, TextInput, FlatList, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind"; // Para utilizar Tailwind con Expo

const StyledTextInput = styled(TextInput); // Usamos Tailwind en el TextInput
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const SearchAndSuggest = ({ data }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    const filteredData = data.filter((item) => item.toLowerCase().includes(text.toLowerCase()));
    setSuggestions(filteredData);
  };

  return (
    <View className="p-4 w-5/6">
      <StyledTextInput
        placeholder="Buscar..."
        value={query}
        onChangeText={handleSearch}
        className="border  border-gray-300 p-2 rounded-md" // Tailwind classes
      />
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <StyledTouchableOpacity className="p-2 bg-gray-200 my-1 rounded" onPress={() => setQuery(item)}>
              <StyledText className="text-lg">{item}</StyledText>
            </StyledTouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default SearchAndSuggest;
