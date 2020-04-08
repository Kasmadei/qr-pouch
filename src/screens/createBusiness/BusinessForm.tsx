import React, { useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import * as yup from "yup";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addBusiness } from "../../services/actions";

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

const BusinessForm: React.FC<{ navigation: NavigationStackProp }> = ({navigation}) => {
  const dispatch = useDispatch();

  const onSubmit = async (values: any, actions: any) => {
    const newBusiness = {
      uuid: `${values.name}-${values.name}-${values.numberOfExpectedScans}`,
      name: values.name,
      voucher: {
        numberOfScans: 0,
        metadata: {
          numberOfExpectedScans: values.numberOfExpectedScans,
        },
      },
    };

    await dispatch(addBusiness(newBusiness));
    navigation.goBack();
    actions.resetForm();
  };

  return (
    <View style={globalStyles.container}>
      <Formik initialValues={initValues} validationSchema={businessSchema} onSubmit={onSubmit}>
        {(props) => {
          const { handleSubmit, handleChange, handleBlur } = props;
          const { name, numberOfExpectedScans } = props.values;

          const isDisabled = () => {
            return (name.length > 0 && numberOfExpectedScans.length > 0)
          };

          const toggle = isDisabled();

          const addButton = toggle ? (
            <TouchableOpacity onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>create</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.buttonDisabled}>create</Text>
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
              {addButton}
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
  },
});

export default BusinessForm;
