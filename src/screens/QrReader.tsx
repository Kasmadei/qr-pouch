
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NavigationStackProp } from "react-navigation-stack";

const QrReader: React.FC<{ navigation: NavigationStackProp }> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);

  const onScan = navigation.getParam('onScan')

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScanned(true);
    onScan(data)
    navigation.goBack();
  };

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned as any} style={StyleSheet.absoluteFillObject} />
    </View>
  );
}

export default QrReader