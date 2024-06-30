import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

export default function DashboardHeader() {
  const { top } = useSafeAreaInsets();
  const address = "0x1234567890abcdef1234567890abcdef12345678"; // TODO: Replace it with actual current user context
  const displayAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

  const copy = () => {
    Clipboard.setString(address);
    if (Platform.OS === "android") {
      ToastAndroid.show("Text copied to clipboard!", ToastAndroid.SHORT);
    } else {
      alert("Text copied to clipboard!");
    }
  };
  return (
    <View
      className="flex flex-row items-baseline justify-between w-full border-b border-gray-200 p-3 pb-1"
      style={{ paddingTop: top }}
    >
      <Text className="text-xl font-bold text-primary">PayBase</Text>
      <TouchableOpacity
        onPress={copy}
        className="text-sm float-right text-muted brightness-75"
      >
        {displayAddress}
      </TouchableOpacity>
    </View>
  );
}