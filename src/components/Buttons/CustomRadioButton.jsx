import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const CustomRadioButton = ({
  label,
  value,
  selected,
  onSelect,
  start,
  color,
}) => {
  return (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      className={`${start && "flex flex-row justify-between items-center"}`}
      onPress={() => onSelect(value)}>
      {start && (
        <View className="flex flex-row gap-3">
          <View className="border border-secondary-green h-[12px] w-[12px] p-2 flex justify-center items-center rounded-sm">
            <View className="h-[10px] w-[10px] bg-secondary-green rounded-full" />
          </View>
          <Text
            className="font-montserrat-regular"
            style={styles.radioButtonLabel}>
            {label}
          </Text>
        </View>
      )}
      <View
        className={`${
          selected === value ? `border-${color}` : "border-black-light"
        }`}
        style={styles.radioButton}>
        {selected === value && (
          <View
            className={`${selected === value && `bg-${color}`}`}
            style={styles.radioButtonInner}
          />
        )}
      </View>
      {!start && (
        <Text
          className="font-montserrat-regular"
          style={styles.radioButtonLabel}>
          {label}
        </Text>
      )}
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
