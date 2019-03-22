import React from "react";
import { Platform } from "react-native";
import HomeScreen from "./Home";
import NetInfoScreen from "./NetInfoState";
import CameraScreen from "./reactNativeCamera";
import ModalScreen from "./ModalScreen";
import TabBarIcon from "./TabBarIcon.js";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      title: "Home",
      headerStyle: {
        backgroundColor: "skyblue"
      }
    }
  }
);
const CameraStack = createStackNavigator({
  Camera: CameraScreen
});
const NetInfoStack = createStackNavigator(
  {
    NetInfo: NetInfoScreen
  }
  //   {
  //     initialRouteName: "Second"
  //   }
);

const ModalStack = createStackNavigator(
  {
    myModal: ModalScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

// HomeStack.navigationOptions = {
//   tabBarLabel: "Home",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : `md-information-circle${focused ? "" : "-outline"}`
//       }
//     />
//   )
// };

NetInfoStack.navigationOptions = {
  tabBarLabel: "NetInfo",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-information-circle"}
    />
  )
};

CameraStack.navigationOptions = {
  tabBarLabel: "Camera",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "" : "md-options"}
    />
  )
};

const BottomNavigator = createBottomTabNavigator({
  NetInfoStack,
  CameraStack
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeStack,
      CameraNetInfo: BottomNavigator,
      Modal: ModalStack
    },
    {
      initialRouteName: "Home"
    }
  )
);
