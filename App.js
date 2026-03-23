import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import Constants from "expo-constants";
import logo from "./assets/images/logo.png";
import poster from "./assets/images/poster.jpeg";

const aspectRatio = poster.width / poster.height;

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.header, styles.padding]}>
        <Image
          source={logo}
          style={{ width: 100, height: "100%", resizeMode: "contain" }}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.padding]}>
        <Text style={[styles.h1, styles.text]}>Inglourious Basterds</Text>
        <Text style={[styles.text]}>2009 &#x2022; R &#x2022; 2h 33m</Text>
      </View>
      <View style={[styles.heroContainer, styles.padding]}>
        <Image
          source={poster}
          style={{ width: 150 }}
          resizeMode="contain"
          onLoad={() => console.log("img loaded")}
        />
        <View style={{ flex: 1 }}>
          <Text style={[styles.text]}>
            In Nazi-occupied France during World War II, a plan to assassinate
            Nazi leaders by a group of Jewish U.S. soldiers coincides with a
            theatre owner's vengeful plans for the same.
          </Text>
          <Button title="+ ADD TO WATCHLIST" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "slategrey",
    alignItems: "start",
    height: 60,
  },
  container: {
    backgroundColor: "black",
    marginBlockStart: Constants.statusBarHeight,
  },
  h1: {
    color: "white",
    marginBlockEnd: 10,
    fontSize: 32,
  },
  text: {
    color: "white",
  },
  padding: {
    paddingBlock: 5,
    paddingInline: 12,
  },
  horizontal: {
    flexDirection: "row",
  },
  heroContainer: {
    flexDirection: "row",
    gap: 12,
    height: 300,
  },
  image: {
    width: 150,
    // height: 200,
  },
});
