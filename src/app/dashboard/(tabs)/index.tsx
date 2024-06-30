import { View, Text, StyleSheet } from "react-native";
import { SectionHeading } from "@/components/dashboard/typography";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function Tab() {
  return (
    <View className="flex flex-col space-y-4 p-3">
      <WalletBalance balance={0} unit="USD" />
      <Actions />
    </View>
  );
}

function WalletBalance({ balance, unit }: { balance: number; unit: string }) {
  return (
    <View className="flex flex-col gap-1 my-2">
      <SectionHeading>Wallet Balance</SectionHeading>
      <Text className="font-extrabold tracking-tight text-foreground text-4xl">
        {balance.toFixed(2)} {unit}
      </Text>
    </View>
  );
}

function Actions() {
  const actions: any[] = [
    {
      icon: <Feather size={24} name="upload" color={"white"} />,
      label: "Deposit",
    },
    {
      icon: <MaterialIcons size={24} name="payment" color={"white"} />,
      label: "Pay",
    },
    {
      icon: <Ionicons size={24} name="qr-code" color={"white"} />,
      label: "QR",
    },
  ];

  return (
    <View className="flex flex-row justify-around w-full">
      {actions.map((action, index) => (
        <View key={index} className="flex flex-col items-center gap-1 p-2 ">
          <View className="h-12 w-12 rounded-full bg-primary justify-center items-center">{action.icon}</View>
          <Text className="text-xs font-medium text-center">{action.label}</Text>
        </View>
      ))}
    </View>
  );
}
