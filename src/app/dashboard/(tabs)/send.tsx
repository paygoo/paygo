import { View, Text, StyleSheet } from 'react-native';
import PayCard from '@/components/dashboard/pay/pay-card';
export default function Tab() {
  return (
    <View style={styles.container}>
      <PayCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
