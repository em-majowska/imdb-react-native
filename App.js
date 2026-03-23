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
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Cast from "./components/Cast";

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
      <View style={{ backgroundColor: "#212121" }}>
        <View style={[styles.padding]}>
          <Text style={[styles.h1, styles.text]}>Inglourious Basterds</Text>
          <Text style={[styles.text]}>2009 &#x2022; R &#x2022; 2h 33m</Text>
        </View>
        <Hero />
        <Stats />
      </View>
      <View>
        <Cast />
        <View style={[styles.padding]}>
          <Text style={[styles.text, { fontWeight: 500 }]}>Director</Text>
          <Text style={[styles.text, { color: "grey", marginBlockEnd: 12 }]}>
            Quentin Tarantino
          </Text>
          <Text style={[styles.text, { fontWeight: 500 }]}>Writers</Text>
          <Text style={[styles.text, { color: "grey" }]}>
            Quentin Tarantino
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    marginBlockStart: Constants.statusBarHeight,
    gap: 16,
    paddingBlockEnd: 50,
  },
  header: {
    backgroundColor: "#393939",
    alignItems: "start",
    height: 60,
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
});
