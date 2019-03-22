import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.modal}>
        <Text style={styles.welcome}> React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button
          title="Goto CameraNetInfo"
          onPress={() => this.props.navigation.navigate("CameraNetInfo")}
        />
        {/* <Button
          title="Goto Modal"
          onPress={() => this.props.navigation.navigate("Modal")}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
