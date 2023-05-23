import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Switch,
  Button,
  TextInput,
} from "react-native";
import { BottomSheet } from "react-native-btr";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TimePicker from "react-native-simple-time-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Entypo } from "@expo/vector-icons";
import color from "../../constants/colors";
import { Checkbox } from "react-native-paper";

const SetReminderScreen = ({ route, navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [reminderTime, setReminderTime] = useState("00:00");
  const [dailyReminder, setDailyReminder] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [visible, setVisible] = useState(false);
  const [customTask, setCustomTask] = useState("");
  const [reminderObject, setReminderObject] = useState({
    id: null,
    title: null,
    time: "00:00",
  });

  const [cardData, setCardData] = useState([
    {
      id: 0,
      title: "After getting out of bed",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/set-reminder-images%2Fsunrise.png?alt=media&token=5c7f0513-2b3d-4157-9573-3b534c649798",
    },
    {
      id: 1,
      title: "After Breakfast",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/set-reminder-images%2Fbreakfast.png?alt=media&token=48a93895-1232-4b66-8a1c-a5d28633fd3e",
    },
    {
      id: 2,
      title: "Having Lunch/Dinner",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/set-reminder-images%2Flunch-time.png?alt=media&token=e79c7049-41dd-4cf6-87da-a154ec52cca9",
    },
    {
      id: 3,
      title: "After work",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/set-reminder-images%2Fhard-work.png?alt=media&token=8c98b4d8-ba62-4550-adf4-8bdf999d4a41",
    },
    {
      id: 4,
      title: "Before Bed",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/set-reminder-images%2Fmoon.png?alt=media&token=da54b17a-0516-48bd-a038-6c40bea4e50d",
    },
    {
      id: 5,
      title: "Add your own",
      image:
        "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/set-reminder-images%2Fadd%20task.png?alt=media&token=2c903988-589b-40c8-be7e-579b8586018a",
    },
  ]);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    currentTime();
  }, []);

  const handleCardPress = (list) => {
    console.log("list:Press ", list.id);
    setDailyReminder(true);
    setReminderObject({
      id: list.id,
      title: list.title,
      time: reminderTime,
    });
    console.log("reminder objectttt: ", reminderObject);
  };

  const currentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const time = `${hours}:${minutes}`;
    setReminderTime(time);
  };

  const setReminder = () => {
    Alert.alert(null, "Reminder set", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Reminders"),
      },
    ]);
  };

  const setRoutine = () => {
    toggleBottomNavigationView();
    handleCardPress(customTask);
  };

  const onToggleDailyReminder = () => {
    setDailyReminder(!dailyReminder);
    console.log("switch:", dailyReminder);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const selectedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log(selectedTime);
    hideDatePicker();
    setReminderTime(selectedTime);
  };

  const renderCardRow = (start, end) => {
    return (
      <View style={styles.cardContainer}>
        {cardData.slice(start, end).map((data) => {
          return <SetReminderCard key={data.id} list={data} />;
        })}
      </View>
    );
    // }
  };

  const SetReminderCard = ({ list }) => {
    if (list.id != 5) {
      return (
        <View>
          <TouchableOpacity
            style={[
              styles.setReminderCardContainer,
              selectedCard === list.id && styles.selectedCardColor,
            ]}
            onPress={() => handleCardPress(list)}
          >
            <Image
              resizeMode="contain"
              style={{
                height: "70%",
                width: "60%",
                alignSelf: "center",
              }}
              source={{
                uri: list.image,
              }}
            />
            <Text style={{ textAlign: "center", marginTop: 2 }}>
              {list.title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <TouchableOpacity
            style={[
              styles.setReminderCardContainer,
              selectedCard === list.id && styles.selectedCardColor,
            ]}
            onPress={toggleBottomNavigationView}
          >
            <Image
              resizeMode="contain"
              style={{
                height: "70%",
                width: "60%",
                alignSelf: "center",
              }}
              source={{
                uri: list.image,
              }}
            />
            <Text style={{ textAlign: "center", marginTop: 2 }}>
              {list.title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View>
      <Image
        resizeMode="contain"
        style={{
          height: "50%",
          width: "60%",
          marginTop: -70,
          marginBottom: -75,
          alignSelf: "center",
        }}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/mindcare-691a2.appspot.com/o/set-reminder-images%2FHappy%20Earth-cuate.png?alt=media&token=f296e18d-22c0-42fc-87cb-a73299113724",
        }}
      />
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
        Build your own routine
      </Text>
      <Text style={{ textAlign: "center" }}>
        I commit to completing a session:
      </Text>
      {renderCardRow(0, 3)}
      {renderCardRow(3, 6)}

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "50%",
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          <Text>at</Text>
          <View style={styles.textInput}>
            <Text>{reminderObject.time}</Text>
            <TouchableOpacity>
              <Text>
                <Entypo
                  name="chevron-small-down"
                  size={24}
                  color="black"
                  onPress={showDatePicker}
                />
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={{ color: color.darkGrey }}>everyday</Text>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      {reminderObject.title != null && dailyReminder && (
        <View
          style={{
            height: 30,
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: 17,
            }}
          >
            Daily Reminder
          </Text>
          <Switch
            value={dailyReminder}
            onValueChange={onToggleDailyReminder}
            trackColor={{ true: "black", false: color.lightGrey }}
            thumbColor={reminderTime ? "white" : "white"}
            style={{ marginBottom: 5 }}
          />
        </View>
      )}

      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <Text
            style={{ alignSelf: "flex-end", marginRight: 15, marginTop: 10 }}
          >
            <Entypo
              name="cross"
              size={24}
              color="black"
              onPress={toggleBottomNavigationView}
            />
          </Text>
          <View>
            <Text
              style={{
                textAlign: "center",
                padding: 20,
                fontSize: 20,
              }}
            >
              Add your own routine
            </Text>
            <TextInput
              value={customTask}
              onChangeText={(text) => setCustomTask(text)}
              style={{ borderBottomWidth: 1, padding: 10 }}
              placeholder="Eg. After shutting down my laptop"
            />
            <View
              style={{
                flexDirection: "row",
                marginTop: 8,
              }}
            >
              <Text>It's best to be as specific as possible!</Text>
              {/* <Text>0/24</Text> */}
            </View>
            <View style={styles.buttonParent}>
              <TouchableOpacity
                style={styles.button}
                onPress={setRoutine}
                // onSubmit={handleSubmit}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Inter_700Bold",
                    fontSize: 20,
                  }}
                >
                  Set Routine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
      <View style={styles.buttonParent}>
        <TouchableOpacity
          style={styles.button}
          onPress={setReminder}
          disabled={dailyReminder && selectedCard ? false : true}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Inter_700Bold",
              fontSize: 20,
            }}
          >
            Set Reminder
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "red",
  },
  textInput: {
    borderWidth: 1,
    width: 100,
    height: 30,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 5,
    borderColor: color.darkGrey,
  },
  buttonParent: {
    marginTop: 15,
    alignItems: "center",
  },
  button: {
    backgroundColor: color.grey,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 280,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  setReminderCardContainer: {
    width: 110,
    height: 135,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    elevation: 5,
  },
  selectedCardColor: {
    backgroundColor: "yellow",
  },
});

export default SetReminderScreen;
