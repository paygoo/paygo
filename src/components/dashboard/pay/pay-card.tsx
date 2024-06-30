import { View, Text } from "react-native";

export default function PayCard() {
  return (
    <View className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <Text className="text-lg font-semibold">Pay</Text>
      <Text className="text-muted text-sm">
        Pay for goods and services using your wallet balance or a card
      </Text>
    </View>
  );
}
