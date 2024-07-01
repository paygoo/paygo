import { View, Text, Image, StyleSheet } from "react-native";
import { SectionHeading } from "./typography";

export default function QRCard() {
  return (
    <View className="bg-background rounded-md gap-2 p-4 w-80 items-center">
      <SectionHeading>My QR Code</SectionHeading>
      <View className="w-40 h-40 rounded-md border border-muted/60">
        <Image
          source={require( 'src/assets/qr_samplw.png' )}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 160, // 40 * 4 (to match "w-40" in Tailwind CSS)
    height: 160, // 40 * 4
    borderRadius: 8, // to match "rounded-md"
    borderWidth: 1,
    borderColor: '#BDBDBD', // replace this with your muted color
    overflow: 'hidden', // ensures the image fits within the rounded corners
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'contain', 'stretch', etc. based on your requirement
  },
});
