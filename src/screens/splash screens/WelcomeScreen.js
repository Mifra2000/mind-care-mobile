import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
const welcome = require("../../../assets/images/welcome.png");
import color from "../../constants/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <Image source={welcome} style={styles.image} />
        <Text style={styles.text}> Welcome to Mind Care </Text>
      </View>
      <View style={{ paddingLeft: 40, paddingRight: 40 }}>
        <Text
          style={{ textAlign: "center", color: color.darkGrey, fontSize: 16 }}
        >
          Speak with licensed therapists or take on self guided programs,
          entirely within a signle platform
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    height: "80%",
    flexWrap: "wrap",
  },
  image: {
    height: "55%",
    width: "100%",
    marginTop: 90,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: color.grey,
    textAlign: "center",
    marginTop: 25,
  },
  buttonParent: {
    marginTop: 60,
    alignItems: "center",
  },
  button: {
    backgroundColor: color.grey,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
});

export default WelcomeScreen;
