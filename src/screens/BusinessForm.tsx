import React, { useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import * as yup from "yup";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../../globalStyles";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { QR_READER } from "../types";
import { useDispatch } from "react-redux";
import { addBusiness } from "../services/actions";

const businessSchema = yup.object({
  name: yup.string().required().min(4),
  numberOfExpectedScans: yup
    .string()
    .required()
    .test("is-num-1-99", "value must be a number between 1 - 99", (val) => {
      return parseInt(val) < 100 && parseInt(val) > 0;
    }),
});

const initValues = { name: "", numberOfExpectedScans: "" };

const BusinessForm: React.FC<{ navigation: NavigationStackProp }> = ({ navigation }) => {
  const [scannedStr, setScannedStr] = useState<string | undefined>(undefined);
  const dispatch = useDispatch();

  const onSubmit = async (values: any, actions: any) => {
    if (scannedStr !== undefined) {
      const newBusiness = {
        uuid: scannedStr,
        name: values.name,
        voucher: {
          numberOfExpectedScans: values.numberOfExpectedScans,
          numberOfScans: 0,
        },
      };
      actions.resetForm();
      setScannedStr(undefined);
      navigation.goBack();
      await dispatch(addBusiness(newBusiness));
    } else {
      Alert.alert("Oops!", "You need to scan qr code");
    }
  };

  const onScan = (str: string) => {
    setScannedStr(str);
  };

  return (
    <View style={globalStyles.container}>
      <Formik initialValues={initValues} validationSchema={businessSchema} onSubmit={onSubmit}>
        {(props) => {
          const { handleSubmit, handleChange, handleBlur } = props;
          const { name, numberOfExpectedScans } = props.values;

          const isDisabled = () => {
            if (name.length > 0 && numberOfExpectedScans.length > 0 && scannedStr !== undefined) return true
            return false
          };

          const toggle = isDisabled();

          const createButton = toggle ? (
            <TouchableOpacity onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>create</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.buttonDisabled}>create</Text>
          );

          const scanButton = scannedStr === undefined ? (
              <>
                <Text style={styles.title}>
                  you need to scan qr code
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate(QR_READER, { onScan })}>
                  <Text style={styles.buttonText}>scan</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.titleSuccess}>Success</Text>
                <Text style={styles.title}>qr code has been scanned</Text>
                <TouchableOpacity onPress={() => navigation.navigate(QR_READER, { onScan })}>
                  <Text style={{ ...styles.buttonText, backgroundColor: "#d3d3d3" }}>
                    scan again
                  </Text>
                </TouchableOpacity>
              </>
            );

          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Name"
                onChangeText={handleChange("name")}
                value={name}
                onBlur={handleBlur("name")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.name && props.errors.name}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Number of expectedScans"
                keyboardType="numeric"
                onChangeText={handleChange("numberOfExpectedScans")}
                value={numberOfExpectedScans}
                onBlur={handleBlur("numberOfExpectedScans")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.numberOfExpectedScans &&
                  props.errors.numberOfExpectedScans}
              </Text>
              {scanButton}
              {createButton}
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  formBody: {
    height: 300,
    backgroundColor: "pink",
  },
  buttonText: {
    fontSize: 24,
    backgroundColor: "#d9e3f2",
    color: "#678fcc",
    marginLeft: 12,
    marginRight: 12,
    textAlign: "center",
    padding: 8,
    borderWidth: 2,
    borderColor: "#c6d5ec",
    marginTop: 20,
  },
  buttonDisabled: {
    fontSize: 24,
    marginLeft: 12,
    marginRight: 12,
    textAlign: "center",
    padding: 8,
    borderWidth: 2,
    marginTop: 20,
    backgroundColor: "#d3d3d3",
    color: "#999999",
    borderColor: "#b3b3b3",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  titleSuccess: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  }
});

export default BusinessForm;
