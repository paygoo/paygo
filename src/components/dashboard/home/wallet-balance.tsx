import { SectionHeading } from "../typography";
import { View, Text } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function WalletBalance({ balance, unit }: { balance: number; unit: string }) {
  return (
    <View className="flex flex-col gap-1 my-2">
      <SectionHeading>Wallet Balance</SectionHeading>
      <Text className="font-extrabold tracking-tight text-foreground text-4xl">
        {balance.toFixed(2)} {unit}
      </Text>
      <Actions />
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
    <View className="flex flex-row justify-around w-full my-2">
      {actions.map((action, index) => (
        <View key={index} className="flex flex-col items-center gap-1 p-2 ">
          <View className="h-12 w-12 rounded-full bg-primary justify-center items-center">
            {action.icon}
          </View>
          <Text className="text-xs font-medium text-center">
            {action.label}
          </Text>
        </View>
      ))}
    </View>
  );
}
