import { SectionHeading } from "../typography";
import { View, Text } from "react-native";

export default function WalletBalance({ balance, unit }: { balance: number; unit: string }) {
  return (
    <View className="flex flex-col gap-1 mt-4 -mb-1">
      <SectionHeading>Wallet Balance</SectionHeading>
      <Text className="font-extrabold tracking-tight text-foreground text-4xl">
        {balance.toFixed(2)} {unit}
      </Text>
    </View>
  );
}
