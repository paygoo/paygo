import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { Link } from "expo-router";

type actionBase<T extends "component" | "link"> = {
  icon: React.ReactNode;
  label: string;
  type: T;
  link?: T extends "link" ? string : never;
  component?: T extends "component" ? React.ReactNode : never;
};

export type actionData = actionBase<"component"> | actionBase<"link">;

export default function Actions() {
  const actions: actionData[] = [
    {
      icon: <Feather size={20} name="download" color={"white"} />,
      label: "Deposit",
      type: "component",
      component: <Text>Deposit</Text>,
    },
    {
      icon: <Feather size={20} name="upload" color={"white"} />,
      label: "Withdraw",
      type: "component",
      component: <Text>Withdraw</Text>,
    },
    {
      icon: <FontAwesome size={20} name="send" color={"white"} />,
      label: "Send",
      type: "link",
      link: "/dashboard/send",
    },
    {
      icon: <Ionicons size={20} name="qr-code" color={"white"} />,
      label: "QR",
      type: "link",
      link: "/dashboard/my-qr",
    },
  ];

  return (
    <View className="flex flex-row justify-around pb-2">
      {actions.map((action, index) =>
        action.type === "link" ? (
          <Link key={index} href={action.link}>
            <View className="flex flex-col items-center gap-1 p-2">
              <View className="h-12 w-12 rounded-full bg-primary justify-center items-center">
                {action.icon}
              </View>
              <Text className="text-xs font-medium text-center">
                {action.label}
              </Text>
            </View>
          </Link>
        ) : (
          <View key={index} className="flex flex-col items-center gap-1 p-2">
            <View className="h-12 w-12 rounded-full bg-primary justify-center items-center">
              {action.icon}
            </View>
            <Text className="text-xs font-medium text-center">
              {action.label}
            </Text>
          </View>
        )
      )}
    </View>
  );
}
