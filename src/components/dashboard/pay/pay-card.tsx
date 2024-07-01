// import { View, Text } from "react-native";

// export default function PayCard() {
//   return (
//     <View className="bg-white rounded-lg shadow-md p-4 space-y-4">
//       <Text className="text-lg font-semibold">Pay</Text>
//       <Text className="text-muted text-sm">
//         Pay for goods and services using your wallet balance or a card
//       </Text>
//     </View>
//   );
// }


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const PayCard = () => {
  const [option, setOption] = useState(null); // null, 'text', or 'qr'
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setAddress(data);
  };

  const renderContent = () => {
    if (option === 'text') {
      return (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter account address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter amount to transfer"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <Button title="Transfer" onPress={handleTransfer} />
        </View>
      );
    } else if (option === 'qr') {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
          )}
          <TextInput
            style={styles.input}
            placeholder="Enter amount to transfer"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <Button title="Transfer" onPress={handleTransfer} />
        </View>
      );
    } else {
      return (
        <View style={styles.optionContainer}>
          <Button title="Enter Address Manually" onPress={() => setOption('text')} />
          <Button title="Scan QR Code" onPress={() => setOption('qr')} />
        </View>
      );
    }
  };

  const handleTransfer = () => {
    // Implement transfer logic here
    alert(`Transfer initiated:\nAddress: ${address}\nAmount: ${amount}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.header}>Pay</Text>
      <Text style={styles.subHeader}>
        Pay for goods and services using your wallet balance or a card
      </Text>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
});

export default PayCard;
