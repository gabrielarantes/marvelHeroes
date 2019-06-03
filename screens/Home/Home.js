import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import HomeProvider from "./HomeProvider";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex : 1}}>
        <HomeProvider />
      </View>
    );
  }
}
