import { Feather, MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { SectionHeading } from "../typography";

type transactionBase<T extends "deposit" | "send" | "recieve"> = {
  type: T;
  amount: number;
  otherAddress?: T extends "send" | "recieve" ? string : never;
  date: Date;
};

export type transactionData =
  | transactionBase<"deposit">
  | transactionBase<"send">
  | transactionBase<"recieve">;

export function TransactionHistory() {
  //TODO: Idhar fetch kro transaction history aur useEffect mei laga do

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

function Transaction({ type, amount, date, otherAddress }: transactionData) {
  return (
    <View className="flex flex-col border border-muted rounded-md p-3">
      <View className="flex flex-row w-full items-center justify-between">
        <TransactionBadge type={type} />
        <Text className="text-sm font-medium">${amount.toFixed(2)}</Text>
      </View>
      <View className="flex flex-row justify-between border border-muted/50 rounded-md p-2 mt-2">
        <Text className="text-xs text-muted brightness-75">
          {date.toDateString()}
        </Text>
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
    deposit: <Feather size={20} name="download" color={color} />,
    send: <MaterialIcons size={20} name="call-made" color={color} />,
    recieve: <MaterialIcons size={20} name="call-received" color={color} />,
  };

  return (
    <View className="flex flex-row items-center uppercase font-mono text-xs gap-2">
      {icons[type]} <Text>{type}</Text>
    </View>
  );
}
