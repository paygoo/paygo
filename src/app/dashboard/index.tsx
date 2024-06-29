import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  const { top } = useSafeAreaInsets();
  return (
    <View className="flex flex-1" style={{ marginTop: top }}>
      <Text role="heading" className="text-4xl font-bold text-primary">
        Hello dashboard
      </Text>
    </View>
  );
}
