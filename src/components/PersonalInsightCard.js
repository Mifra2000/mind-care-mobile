import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../constants/colors";

const PersonalInsightCard = ({ title, icon, marginBottom }) => {
  return (
    // <SafeAreaView style={{ backgroundColor: "#FFEBEB", height: 500 }}>
    <View>
      <TouchableOpacity>
        <View style={[styles.container, { marginBottom: marginBottom }]}>
          <Text
            style={{
              color: color.grey,
              fontWeight: "700",
            }}
          >
            {title}
          </Text>
          <View>{icon}</View>
        </View>
      </TouchableOpacity>
    </View>

    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    // margin: 20,
    elevation: 5,
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    padding: 20,
  },
});

export default PersonalInsightCard;
