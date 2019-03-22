import React, { Component } from "react";
import { View, NetInfo, Text, Button } from "react-native";

export default class NetInfoState extends Component {
  state = {
    connectionStatus: "",
    color: "red"
  };

  constructor() {
    super();
  }

  async componentDidMount() {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      console.log(
        "Initial, type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType
      );
    });

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24
    };
    await navigator.geolocation.getCurrentPosition(
      position => {
        console.log("position", position);
      },
      this.geoFailure,
      geoOptions
    );
  }
  geoSuccess = position => {
    alert("hit");
    console.log("position", position);
  };
  geoFailure = err => {
    console.log(err);
  };

  handleFirstConnectivityChange = isConnected => {
    this.setState({
      connectionStatus: isConnected ? "online" : "offline",
      color: isConnected ? "green" : "red"
    });
    console.log("Then, is " + (isConnected ? "online" : "offline"));
    console.log(isConnected);
  };

  render() {
    return (
      <View>
        <Text>From Netinfo Status:</Text>

        <Text style={{ color: this.state.color }}>
          {this.state.connectionStatus}
        </Text>
        <Button
          title="Goto Modal"
          onPress={() => this.props.navigation.navigate("Modal")}
        />
      </View>
    );
  }
}
