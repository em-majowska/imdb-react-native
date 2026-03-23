import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, View } from "react-native";

const Stats = () => {
  return (
    <View style={[styles.padding, styles.container]}>
      <View style={[styles.flexItem]}>
        <AntDesign name="star" size={24} color="yellow" />
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={[styles.text, { fontWeight: 800 }]}>8.4</Text>
          <Text style={[styles.text, styles.small]}>/10</Text>
        </View>
        <Text style={[styles.text, styles.small]}>1.1M</Text>
      </View>

      <View style={[styles.flexItem]}>
        <AntDesign name="star" size={24} color="yellow" />
        <Text style={[styles.text]}>RATE THIS</Text>
      </View>
      <View style={[styles.flexItem]}>
        <Text style={[styles.text, styles.green]}>69</Text>
        <Text style={[styles.text]}>Metascore</Text>
        <Text style={[styles.text, styles.small]}>46 critic reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  padding: {
    paddingBlock: 5,
    paddingInline: 12,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexItem: {
    alignItems: "center",
    flex: 1,
    padding: 12,
  },

  small: {
    fontSize: 12,
    color: "darkgrey",
  },
  green: {
    backgroundColor: "green",
  },
});

export default Stats;
