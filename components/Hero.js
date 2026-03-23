import poster from "../assets/images/poster.jpeg";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Hero = () => {
  return (
    <View style={[styles.heroContainer, styles.padding]}>
      <Image source={poster} style={[styles.image]} resizeMode="contain" />
      <View style={{ flexShrink: 1 }}>
        <Text style={[styles.text, { marginBlockEnd: 12 }]}>
          In Nazi-occupied France during World War II, a plan to assassinate
          Nazi leaders by a group of Jewish U.S. soldiers coincides with a
          theatre owner's vengeful plans for the same.
        </Text>
        <Button title="+ ADD TO WATCHLIST" />
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
  heroContainer: {
    flexDirection: "row",
    gap: 12,
  },
  image: {
    width: 150,
    aspectRatio: 3 / 4,
  },
});

export default Hero;
