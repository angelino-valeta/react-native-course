import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponetScreen from "./src/screens/ComponentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponetScreen,
  },
  {
    initialRouteName: "Component",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
