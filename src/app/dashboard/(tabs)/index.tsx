import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View className="flex bg-background flex-1">
      <Text>Tab Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
