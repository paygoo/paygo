import { View, Text, StyleSheet } from "react-native";
import QRCard from "@/components/dashboard/qr-card";

export default function Tab() {
  return (
    <View style={styles.container}>
      <QRCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
