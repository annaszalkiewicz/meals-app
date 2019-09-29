import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useScreens } from "react-native-screens";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import MealsNavigator from "./navigation/MealsNavigator";
import CategoriesScreen from "./screens/CategoriesScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "Raleway-regular": require("./assets/fonts/Raleway-Regular_0.ttf"),
    "Raleway-semibold": require("./assets/fonts/Raleway-SemiBold_0.ttf")
  });
};

useScreens();

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return <MealsNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
