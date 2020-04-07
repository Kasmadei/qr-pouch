import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { VoucherConfig } from "../../types";
import { globalStyles } from "../../../globalStyles";

const defaultColor = "#fafafa";
const highlightedColor = "#d2f8d2";
const focusedColor = "#ffffa3";

const VoucherTab: React.FC<{ config: VoucherConfig }> = ({ config }) => {
  const { numberOfExpectedScans, numberOfScans } = config;

  const data = [];

  for (let i = 0; i < numberOfExpectedScans; i++) {
    data.push({ id: i });
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.listContainer}>
        <FlatList
          numColumns={3}
          data={data}
          renderItem={({ item }) => ( <View style={styles.card} key={Math.random().toString()} /> )}
          keyExtractor={(item, index) => `${index.toString()}-${Math.random().toString}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "white",
    height: 420,
  },
  card: {
    height: 140,
    width: "33.333%",
    borderWidth: 1,
    borderColor: "#A0A0A0",
  },
});
export default VoucherTab;
