import { StatusBar } from "expo-status-bar";
import { Settings, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import color from "./src/constants/colors";
import Navigation from "./src/components/Navigation";
import Profile from "./src/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";

// import Settings from "./src/screens/Settings";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import ForgotPassword from "./src/screens/ForgotPassword";
import Signin from "./src/screens/Signin";
import MainScreen from "./src/screens/MainScreen";
import TabNavigator from "./src/components/TabNavigator";
import PersonalInsightCard from "./src/components/PersonalInsightCard";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider>
      {/* <PersonalInsightCard /> */}
      {/* <NavigationContainer>
        <TabNavigator />
      </NavigationContainer> */}
      {/* <MainScreen /> */}
      <Navigation />
      {/* <ForgotPassword /> */}
      {/* <Profile /> */}
      {/* <Signin /> */}
      {/* <Profile /> */}
      {/* <Settings /> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.yellow,
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent(appName, () => Main);
