import React from "react";
import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import GuiedJournalingHeader from "../../headers/guiedJournalingHeader";
import GuidedJournalCard from "../../components/GuidedJournalCard";
import journalingData from "../../data/guidedJournalingData";

const GuidedJournalingMain = () => {
  const [numColumns, setNumColumns] = useState(2);

  return (
    <View>
      <FlatList
        data={journalingData}
        key={numColumns}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <GuidedJournalCard title={item.title} image={item.imgUrl} />
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <Footer/> */}
      {/* <ScrollView>
        <GuiedJournalingHeader />
        {journalingData.map((item) => {
          return (
            <GuidedJournalCard
              key={item.id}
              image={item.imgUrl}
              title={item.title}
            />
          );
        })}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default GuidedJournalingMain;
