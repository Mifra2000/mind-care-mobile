import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Card } from "react-native-paper";
const findTherapist = require("../../assets/images/findTherapist.png");
import color from "../constants/colors";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../components/Carousel/CarouselCardItem";
import data from "../data/carouselData";

const MainScreen = () => {
  const isCarousel1 = React.useRef(null);
  const isCarousel2 = React.useRef(null);

  const [index1, setIndex1] = React.useState(0);
  const [index2, setIndex2] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={[styles.card, styles.elevation]}>
          <Card.Title
            title="How are you feeling today?"
            titleStyle={{ fontWeight: 800, textAlign: "center" }}
          />
          <Card.Content
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Entypo name="emoji-happy" size={24} color="black" />
            <Entypo name="emoji-sad" size={24} color="black" />
            <Entypo name="emoji-neutral" size={24} color="black" />
            <FontAwesome5 name="angry" size={24} color="black" />
          </Card.Content>
        </View>
        <View>
          <View>
            <Carousel
              layout="tinder"
              layoutCardOffset={9}
              ref={isCarousel1}
              data={data.slice(0, 3)}
              renderItem={CarouselCardItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              inactiveSlideShift={0}
              onSnapToItem={(index1) => setIndex1(index1)}
              useScrollView={true}
            />
          </View>
          <Pagination
            dotsLength={3}
            activeDotIndex={index1}
            carouselRef={isCarousel1}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: "rgba(0, 0, 0, 0.92)",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </View>
        <View>
          <View>
            <Carousel
              layout="tinder"
              layoutCardOffset={9}
              ref={isCarousel2}
              data={data.slice(3, 6)}
              renderItem={CarouselCardItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              inactiveSlideShift={0}
              onSnapToItem={(index2) => setIndex2(index2)}
              useScrollView={true}
            />
          </View>
          <Pagination
            dotsLength={3}
            activeDotIndex={index2}
            carouselRef={isCarousel2}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: "rgba(0, 0, 0, 0.92)",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.5}
            tappableDots={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    // borderRadius: 8,
    paddingVertical: 15,
    // paddingHorizontal: 25,
    // width: "100%",
    margin: 10,
    // marginHorizontal: 10,
  },
  elevation: {
    elevation: 10,
    shadowColor: "#52006A",
  },
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 50,
    flex: 1,
  },
});

export default MainScreen;
