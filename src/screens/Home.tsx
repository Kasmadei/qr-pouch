import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { globalStyles } from "../../globalStyles";
import { CREATE_BUSINESS, ReduxState, DETAILS } from "../types";
import { useSelector } from "react-redux";
import Card from "../shared/card";

const Home: React.FC<{ navigation: NavigationStackProp }> = ({ navigation }) => {
  const activeBusinesses = useSelector((state: ReduxState) => state.activeBusinesses);
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(CREATE_BUSINESS, { navigation })}>
        <Text style={styles.buttonText}>add business</Text>
      </TouchableOpacity>
      <View style={styles.list}>
        <FlatList
          data={activeBusinesses}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { navigation.navigate(DETAILS, { businessUuid: item.uuid }); }} key={Math.random().toString()}>
              <Card>
                <Text style={globalStyles.titleText}>{`${item.name} - (${item.voucher.numberOfScans}/${item.voucher.metadata.numberOfExpectedScans})`}</Text>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => `${index.toString()}-${item.name}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  list: {
    marginTop: 20,
  },
});

export default Home;
