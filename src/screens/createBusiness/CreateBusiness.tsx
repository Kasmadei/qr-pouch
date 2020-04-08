import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import BusinessForm from "./BusinessForm";
import { Business } from "../../types";

const CreateBusiness: React.FC<{ navigation: NavigationStackProp }> = ({ navigation }) => (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <BusinessForm navigation={navigation} />
    </View>
);

export default CreateBusiness;
