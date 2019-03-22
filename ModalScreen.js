import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  Alert,
  BackHandler
} from "react-native";
export default class ModalScreen extends Component {
  // onButtonPress = () => {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  //   // then navigate
  //   navigate('NewScreen');
  // }

  handleBackButton = () => {
    Alert.alert(
      "Exit App",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp()
        }
      ],
      {
        cancelable: false
      }
    );
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  render() {
    return (
      <View style={myStyleSheet.modal}>
        <Text>Modal Page</Text>
        <Button
          title="Goto Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const myStyleSheet = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center"
  }
});
