import { View, Text } from "react-native";
import { SectionHeading } from "./typography";

export default function QRCard() {
  return (
    <View className="bg-background rounded-md gap-2 p-4 w-80 items-center">
      <SectionHeading>My QR Code</SectionHeading>
      <View className="w-40 h-40 rounded-md border border-muted/60"></View>
    </View>
  );
}
