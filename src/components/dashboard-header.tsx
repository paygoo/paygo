import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";

export default function DashboardHeader() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex space-between" style={{ paddingTop: insets }}>
      <Text></Text>
    </View>
  );
}
