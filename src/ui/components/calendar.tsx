import React from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarComponent() {
  return (
    <View className="flex-1">
      <Calendar
        // Opciones de configuración
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        markedDates={{
          "2023-10-17": { selected: true, marked: true, selectedColor: "blue" },
          "2023-10-18": { marked: true },
          "2023-10-19": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2023-10-20": { disabled: true, disableTouchEvent: true },
        }}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          monthTextColor: "blue",
          indicatorColor: "blue",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
}
