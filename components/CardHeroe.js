//imports default
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

//imports to manage layout
import { ListItem, Card, Overlay, Image, Text } from "react-native-elements";

import { isEmpty } from "lodash";
import { colors } from "../assets/colors";

//import to manage redux

export default class CardHeroe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      overlayVisible: false
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <Card>
        <TouchableOpacity
          onPress={() => {
            this.setState({ overlayVisible: true });
          }}
        >
          <ListItem
            title={this.props.item.name}
            leftAvatar={{
              source: {
                uri:
                  this.props.item.thumbnail.path +
                  "." +
                  this.props.item.thumbnail.extension
              }
            }}
          />
        </TouchableOpacity>

        <Overlay
          isVisible={this.state.overlayVisible}
          //windowBackgroundColor={colors.white}
          overlayBackgroundColor={colors.white}
          width="85%"
          height="70%"
          onBackdropPress={() => this.setState({ overlayVisible: false })}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              PlaceholderContent={<ActivityIndicator />}
              source={{
                uri:
                  this.props.item.thumbnail.path +
                  "." +
                  this.props.item.thumbnail.extension
              }}
              style={{ width: 280, height: 280 }}
            />
            <Text h3 style={styles.title}>
              {this.props.item.name}
            </Text>
            <Text>{this.props.item.description}</Text>
          </View>
        </Overlay>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 15
  }
});
