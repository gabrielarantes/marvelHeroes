import { createStackNavigator } from "react-navigation";

import Home from "../screens/Home/Home";

const Drawer = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerVisible: false,
        header: null
      }
    }
  },
  {
    initialRouteName: "Home",
    gesturesEnabled: false
  }
);

export default Drawer;
