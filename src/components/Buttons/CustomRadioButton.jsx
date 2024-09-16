import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const CustomRadioButton = ({label, value, selected, onSelect}) => {
  return (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={() => onSelect(value)}>
      <View
        className={`${
          selected === value ? "border-secondary-green" : "border-black-light"
        }`}
        style={styles.radioButton}>
        {selected === value && (
          <View
            className={`${
              selected === value ? "bg-secondary-green" : "bg-black-light"
            }`}
            style={styles.radioButtonInner}
          />
        )}
      </View>
      <Text className="font-montserrat-regular" style={styles.radioButtonLabel}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  radioButtonLabel: {
    fontSize: 16,
    color: "#333",
  },
});

export default CustomRadioButton;
