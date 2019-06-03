//imports default
import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Platform,
  ScrollView,
  Overlay
} from "react-native";

//import to manage api
import axios from "axios";
import { baseUrl, apikey, ts, hash } from "../../api/api";

//imports to manage layout
import { Text } from "react-native-elements";
import { colors } from "../../assets/colors";
import Spinner from "react-native-loading-spinner-overlay";
import { isEmpty, map } from "lodash";

//import to manage redux
import { connect } from "react-redux";
import { fetchMore, getHeroes } from "../../actions/actions";

import CardHeroe from "../../components/CardHeroe";

class HomeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroesList: [],
      loading: true
    };
  }

  async getHeroes() {
    this.props.fetchMore();
    this.setState({
      loading: true
    });

    await axios
      .get(
        baseUrl +
          "apikey=" +
          apikey +
          "&hash=" +
          hash +
          "&ts=" +
          ts +
          "&offset=" +
          this.props.offset
      )
      .then(res => {
        let dataHeroes = res.data.data.results;

        this.setState({
          heroesList: dataHeroes,
          loading: false
        });
      });
  }

  componentDidMount() {
    this.getHeroes();
  }

  render() {
    return (
      <View style={styles.root}>
        <Spinner
          visible={this.state.loading}
          textContent={"Loading Heroes..."}
          textStyle={styles.spinnerTextStyle}
        />

        <ScrollView
          onScroll={e => {
            let paddingToBottom = 10;
            paddingToBottom += e.nativeEvent.layoutMeasurement.height;
            if (
              e.nativeEvent.contentOffset.y >=
              e.nativeEvent.contentSize.height - paddingToBottom
            ) {
              this.getHeroes();
            }
          }}
        >
          <Text h3> Marvel Heroes Catalog </Text>
          {!isEmpty(this.state.heroesList[0]) &&
            this.state.heroesList.map((item, index) => {
              return <CardHeroe key={index} item={item} />;
            })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    offset: state.offset
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMore: () => dispatch(fetchMore)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeProvider);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : 10,
    backgroundColor: colors.white
  }
});
