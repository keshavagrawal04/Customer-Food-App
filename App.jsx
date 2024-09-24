import React from "react";
import Navigation from "./src/navigation";
import {Provider} from "react-redux";
import store from "./src/store";
import {LogBox} from "react-native";

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
