import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CastCard from "./CastCard";

const Cast = () => {
  return (
    <View style={[styles.padding]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBlockEnd: 16,
        }}>
        <Text style={[styles.text, { fontSize: 24 }]}>Top Billed Cast</Text>
        <Pressable>
          <Text style={{ color: "steelblue", fontWeight: 900 }}>SEE ALL</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ gap: 5 }} horizontal={true}>
        <CastCard
          name="Brad Pitt"
          character="Lt. Aldo Raine"
          uri="https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_QL75_UX280_CR0,3,280,414_.jpg"
        />
        <CastCard
          name="Diane Kruger"
          character="Bridget von Hammersmark"
          uri="https://m.media-amazon.com/images/M/MV5BMTM3MzY0Nzk2Ml5BMl5BanBnXkFtZTcwODQ0MTMyMw@@._V1_QL75_UX280_CR0,20,280,280_.jpg"
        />
        <CastCard
          name="Eli Roth"
          character="Sgt. Donny Donowitz"
          uri="https://m.media-amazon.com/images/M/MV5BZWJiYTEyMmYtNjYzMS00YmEyLThkZmEtZGVhNjUyOTRjY2NlXkEyXkFqcGc@._V1_CR572,161,1510,2266_QL75_UX280_CR0,24,280,280_.jpg"
        />
        <CastCard
          name="Mélanie Laurent"
          character="Shosanna Dreyfus"
          uri="https://m.media-amazon.com/images/M/MV5BMTU0NzQzNDc5M15BMl5BanBnXkFtZTcwNzMyOTYzNQ@@._V1_QL75_UX280_CR0,25,280,280_.jpg"
        />
        <CastCard
          name="Christoph Waltz"
          character="Col. Hans Landa"
          uri="https://m.media-amazon.com/images/M/MV5BMTM4MDk3OTYxOF5BMl5BanBnXkFtZTcwMDk5OTUwOQ@@._V1_QL75_UX280_CR0,6,280,280_.jpg"
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  padding: {
    padding: 12,
  },
  item: {
    backgroundColor: "#2a2a2a",
    padding: 12,
  },
});
export default Cast;
