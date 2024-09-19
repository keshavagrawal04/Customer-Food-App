import React from "react";
import {View, ActivityIndicator, StyleSheet, Dimensions} from "react-native";

const FullScreenLoader = () => {
  return (
    <View
      className="absolute top-0 left-0 flex justify-center items-center"
      style={styles.container}>
      <ActivityIndicator size="large" color="#FD631F" />
    </View>
  );
};

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    zIndex: 1000,
  },
});

export default FullScreenLoader;
