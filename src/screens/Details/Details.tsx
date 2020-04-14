import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import VoucherTab from "./VoucherTab";
import { QR_READER, ReduxState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { updateVoucher } from "../../services/actions";

const Details: React.FC<{ navigation: NavigationStackProp }> = ({ navigation }) => {
  const dispatch = useDispatch();
  const businessUuid = navigation.getParam("businessUuid");

  const business = useSelector((state: ReduxState) => {
    const allBusiness = state.activeBusinesses;
    return allBusiness.find((b) => b.uuid === businessUuid);
  });

  const onScan = async (str: string) => {
    if (str === businessUuid) {
      await dispatch(updateVoucher(str));
      Alert.alert("Yeah!", "Qr code was successfully scaned.");
    } else {
      Alert.alert("Oops!", "Wrong QR-code. Try again.");
    }
  };

  if (business !== undefined) {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => Alert.alert("business id:", businessUuid)}>
            <Text style={styles.titleText}>{business.name}</Text>
          </TouchableOpacity>
        </View>
        <VoucherTab voucherState={business.voucher} />
        <View style={{ }}>
          <TouchableOpacity onPress={() => navigation.navigate(QR_READER, { onScan })} style={styles.button}>
            <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('reset')} style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('delete')} style={styles.button}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return <></>;
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
  button: {
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    padding: 8,
    borderWidth: 2,
    borderColor: "#c6d5ec",
    marginTop: 20,
    alignItems: "center",
    fontSize: 24,
    backgroundColor: "#d9e3f2",
    color: "#678fcc",
  },
  buttonText: {
    fontSize: 20,
    color: "grey"
  },
});

export default Details;
