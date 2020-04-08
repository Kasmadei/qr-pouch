import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { globalStyles } from "../../../globalStyles";
import { VoucherState } from "../../types";

const defaultColor = "#fafafa";
const highlightedColor = "#e0fae0";
const focusedColor = "#FFFACD";

const VoucherTab: React.FC<{ voucherState: VoucherState }> = ({ voucherState }) => {
  const { numberOfScans, metadata } = voucherState;
  const { numberOfExpectedScans } = metadata

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
          renderItem={({ item }) => {
            const bgColor = numberOfScans > item.id ? highlightedColor : numberOfScans === item.id ? focusedColor : defaultColor  
            return  ( 
              <View style={{ ...styles.card, backgroundColor: bgColor }} key={Math.random().toString()} /> 
              )
          }}
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
  cardScaned: {
    backgroundColor: "blue"
  },
  cardFocus: {
    backgroundColor: "yellow",
    borderColor: "red"
  }
});
export default VoucherTab;
