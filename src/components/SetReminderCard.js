import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
// import Checkbox from "expo-checkbox";
import { Checkbox } from "react-native-paper";

const SetReminderCard = ({ title, image, checkBoxValue, change }) => {
  const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const check = () => {
    console.log("hello");
    console.log(image);
  };
  return (
    <View style={styles.cardContainer}>
      {/* <TouchableOpacity onPress={check}> */}
      {/*     <Checkbox value={isSelected} onValueChange={setSelection} /> */}
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Image
        resizeMode="contain"
        style={{
          height: "40%",
          width: "60%",
          alignSelf: "center",
        }}
        source={{
          uri: image,
        }}
      />

      <Text style={{ textAlign: "center", marginTop: 2 }}>{title}</Text>
      {/* </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 110,
    height: 135,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    elevation: 5,
  },
});

export default SetReminderCard;
