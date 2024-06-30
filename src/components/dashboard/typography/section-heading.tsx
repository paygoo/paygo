import { Text } from "react-native";

export default function SectionHeading({ children }: { children: string }) {
  return (
    <Text className="text-muted brightness-75 font-medium text-sm tracking-tight">
      {children}
    </Text>
  );
}
