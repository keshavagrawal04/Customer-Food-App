import {StyleSheet, TextInput, Animated, Easing, Text} from "react-native";
import React, {useEffect, useRef} from "react";
import {getIn} from "formik";

const FloatingLabelTextInput = ({
  label,
  labelColor = "#FD631F",
  duration = 200,
  id,
  formik,
  type = "default",
  inputStyles,
  isTextArea = false,
  numberOfLines = undefined,
}) => {
  const transY = useRef(new Animated.Value(0)).current;
  const borderWidth = useRef(new Animated.Value(1)).current;

  const borderColor = borderWidth.interpolate({
    inputRange: [1, 2],
    outputRange: ["#3C3A45", "#FD631F"],
  });

  const labelColorAnimation = borderWidth.interpolate({
    inputRange: [1, 2],
    outputRange: ["#3C3A45", labelColor],
  });

  const labelBackgroundColor = borderWidth.interpolate({
    inputRange: [1, 2],
    outputRange: ["#F4F5F7", "#F4F5F7"],
  });

  const transformAnimation = toValue => {
    Animated.timing(transY, {
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const animatedBorderWidth = toValue => {
    Animated.timing(borderWidth, {
      toValue,
      duration,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const animationStyle = {
    transform: [{translateY: transY}],
  };

  const handleOnFocus = () => {
    if (isTextArea) {
      transformAnimation(-20);
    } else {
      transformAnimation(-27.5);
    }
    animatedBorderWidth(2);
  };

  const handleOnBlur = () => {
    if (getIn(formik.values, id)?.toString()) return;
    transformAnimation(0);
    animatedBorderWidth(1);
  };

  useEffect(() => {
    if (getIn(formik.values, id)) {
      handleOnFocus();
    } else {
      handleOnBlur();
    }
  }, [getIn(formik.values, id)]);

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {borderWidth: 1, borderColor: borderColor, marginTop: 5},
        ]}>
        <Animated.View
          style={[
            styles.animatedStyle,
            animationStyle,
            {top: isTextArea ? "8%" : "30%"},
          ]}>
          <Animated.Text
            style={{
              color: labelColorAnimation,
              fontFamily: "Montserrat-Regular",
              backgroundColor: labelBackgroundColor,
              paddingHorizontal: 4,
              fontSize: 14,
            }}>
            {label}
          </Animated.Text>
        </Animated.View>
        <TextInput
          editable={true}
          blurOnSubmit
          autoCapitalize={`none`}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={getIn(formik.values, id)?.toString()}
          onChangeText={formik.handleChange(id)}
          className={`text-black text-base font-montserrat-regular px-5 rounded-xl ${inputStyles}`}
          style={{textAlignVertical: `${isTextArea ? "top" : "center"}`}}
          keyboardType={type}
          multiline={isTextArea}
          numberOfLines={numberOfLines}
        />
      </Animated.View>
      {getIn(formik.touched, id) && getIn(formik.errors, id) ? (
        <Text className="h-[22px] mb-3 pt-1 px-2 text-error text-md font-proxima-nova-regular">
          {getIn(formik.errors, id)}
        </Text>
      ) : (
        <Text className="h-[22px] mb-3" />
      )}
    </>
  );
};

export default FloatingLabelTextInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    backgroundColor: "#F4F5F7",
    borderRadius: 11,
    width: "100%",
    alignSelf: "center",
  },
  animatedStyle: {
    left: 15,
    position: "absolute",
    borderRadius: 90,
    zIndex: 10,
  },
});
