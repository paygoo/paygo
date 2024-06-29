import "../global.css";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View className="bg-background text-foreground flex flex-1">
      <Slot />
    </View>
  );
}
