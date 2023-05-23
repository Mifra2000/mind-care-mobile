import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import color from "../constants/colors";
import { Card } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import PersonalInsightCard from "../components/PersonalInsightCard";
import Navigation from "../components/Navigation";
import { FlashList } from "@shopify/flash-list";
import GuidedJournalCard from "../components/GuidedJournalCard";

const InsightsProfile = ({ navigation }) => {
  const [username, setUsername] = useState("Mifra Waseem");
  const [card, setCard] = useState([
    {
      key: 0,
      title: "Daily Reminder",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/profile-insights%2FTo%20do%20list-rafiki.png?alt=media&token=2a0d6d59-807e-4868-b582-951e622052f3",
    },
  ]);

  const CardComponent = ({ title, image }) => {
    console.log("inside card image: ", image);
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity>
          <Image
            style={{ flex: 1, resizeMode: "cover" }}
            source={{
              uri: image,
            }}
          />
          <Text>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: color.lightPink }}>
        <View style={styles.container1}>
          <Text style={{ margin: 20, fontSize: 18, fontWeight: "bold" }}>
            {username}
          </Text>
          <Ionicons
            style={{ margin: 20 }}
            name="settings-outline"
            size={24}
            color="black"
          />
        </View>

        <View>
          <PersonalInsightCard
            title="Personal Insight"
            icon={<AntDesign name="right" size={15} color="black" />}
            marginBottom={10}
          />
          <PersonalInsightCard
            title="View Psychologcial Profile"
            icon={<AntDesign name="right" size={15} color="black" />}
            marginBottom={10}
          />
          <PersonalInsightCard
            title="View/Edit Goals"
            icon={<AntDesign name="right" size={15} color="black" />}
            marginBottom={10}
          />
          <PersonalInsightCard
            title="Connect to SOS support"
            icon={<AntDesign name="right" size={15} color="black" />}
            marginBottom={10}
          />
          <PersonalInsightCard
            title="Invite Friends to Intellect"
            icon={<AntDesign name="right" size={15} color="black" />}
            marginBottom={10}
          />
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Daily Reminder")}>
          <Card>
            <Card.Title title="Daily Reminder" />
          </Card>
        </TouchableOpacity>
      </View>
      {card.map((data) => {
        console.log("image: ", data.image);
        return (
          <CardComponent key={data.key} title={data.title} image={data.image} />
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 2,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  cardTitle: {
    color: color.grey,
    fontWeight: "700",
  },
  cardContainer: {
    flex: 1,
    margin: 5,
    height: 200,
    marginBottom: 35,
  },
});

export default InsightsProfile;
