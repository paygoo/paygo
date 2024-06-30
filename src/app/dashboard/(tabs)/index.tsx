import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SectionHeading } from "@/components/dashboard/typography";
import {
  FontAwesome,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function Tab() {
  return (
    <View className="flex flex-col space-y-4 p-3">
      <WalletBalance balance={0} unit="USD" />
      <TransactionHistory />
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

function TransactionHistory() {
  const transactions: transactionData[] = [
    {
      type: "deposit",
      amount: 100,
      date: new Date(),
    },
    {
      type: "send",
      amount: 50,
      date: new Date(),
      otherAddress: "0x1234567890abcdef1234567890abcdef12345678",
    },
    {
      type: "recieve",
      amount: 75,
      date: new Date(),
      otherAddress: "0x1234567890abcdef1234567890abcdef12345678",
    },
  ];

  //TODO: Idhar fetch kro transaction history aur useEffect mei laga do
  return (
    <View className="flex flex-col gap-2">
      <SectionHeading>Transaction History</SectionHeading>
      <View className="flex flex-col gap-2">
        {transactions.map((transaction, index) => (
          <Transaction key={index} {...transaction} />
        ))}
      </View>
    </View>
  );
}

type transactionBase<T extends "deposit" | "send" | "recieve"> = {
  type: T;
  amount: number;
  otherAddress?: T extends "send" | "recieve" ? string : never;
  date: Date;
};

type transactionData =
  | transactionBase<"deposit">
  | transactionBase<"send">
  | transactionBase<"recieve">;

function Transaction({ type, amount, date, otherAddress }: transactionData) {
  return (
    <View className="flex flex-col border border-muted rounded-md p-3">
      <View className="flex flex-row w-full items-center justify-between">
        <TransactionBadge type={type} />
        <Text className="text-sm font-medium">${amount.toFixed(2)}</Text>
      </View>
      <View className="flex flex-row justify-between border border-muted/50 rounded-md p-2 mt-2">
        <Text className="text-xs text-muted brightness-75">{date.toDateString()}</Text>
        {(type === "send" || type === "recieve") && (
          <>
            <Text className="text-xs text-muted font-medium brightness-75">
              {type === "send" ? "To: " : "From: "}
              {otherAddress.split("").splice(0, 6).join("")}...
            </Text>
          </>
        )}
      </View>
    </View>
  );
}

function TransactionBadge({ type }: { type: transactionData["type"] }) {
  const color = "#2157F7";
  const icons = {
    deposit: <Feather size={20} name="upload" color={color} />,
    send: <MaterialIcons size={20} name="call-made" color={color} />,
    recieve: <MaterialIcons size={20} name="call-received" color={color} />,
  };

  return (
    <View className="flex flex-row items-center uppercase font-mono text-xs gap-2">
      {icons[type]} {type}
    </View>
  );
}
