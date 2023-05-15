import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import color from "../../constants/colors";

const SleepJournal = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 500,
          fontSize: 25,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Select one to get started
      </Text>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.text}>Dream Journal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.text}>Finding a peaceful space</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.text}>Finding the day ahead</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.text}>Calming the mind</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.text}>Looking forward to tommorrow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  container: {
    backgroundColor: color.grey,
    padding: 15,
    width: "80%",
    borderRadius: 25,
    margin: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default SleepJournal;
