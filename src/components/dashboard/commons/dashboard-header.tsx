import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from "react-native";
import * as Clipboard from 'expo-clipboard';


export default function DashboardHeader() {
  const { top } = useSafeAreaInsets();
  const address = "0x9ec7D4215Fc2917B49A2Ae036c09Fdee14Dee796"; // TODO: Replace it with actual current user context
  const displayAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

  const copy = async () => {
    await Clipboard.setStringAsync(address);
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
      <Text
        onPress={copy}
        className="text-sm float-right text-muted brightness-75"
      >
        {displayAddress}
      </Text>
    </View>
  );
}
