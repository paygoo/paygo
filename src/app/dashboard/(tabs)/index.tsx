import { View, Text } from "react-native";
import { WalletBalance, TransactionHistory } from "@/components/dashboard/home";

export default function Tab() {
  return (
    <View className="flex flex-col space-y-4 p-3">
      <WalletBalance balance={0} unit="USD" />
      <TransactionHistory />
    </View>
  );
}
