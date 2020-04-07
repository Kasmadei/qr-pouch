import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import VoucherTab from "./VoucherTab";

const Details: React.FC<{ navigation: NavigationStackProp }> = ({ navigation }) => {
  const business = navigation.getParam("business");

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{business.name}</Text>
      </View>
      <VoucherTab config={business.voucher} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Details;
