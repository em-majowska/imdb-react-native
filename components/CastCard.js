import { Image, StyleSheet, Text, View } from "react-native";

const CastCard = ({ name, character, uri }) => {
  return (
    <View
      style={{
        width: 135,
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#2a2a2a",
      }}>
      <Image
        source={{
          uri: uri,
        }}
        style={[styles.image]}
      />
      <View style={[styles.padding]}>
        <Text style={[styles.text]} numberOfLines={1}>
          {name}
        </Text>
        <Text style={[styles.small]}>{character}</Text>
      </View>
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
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
  },
  small: {
    fontSize: 12,
    color: "gray",
  },
});

export default CastCard;
