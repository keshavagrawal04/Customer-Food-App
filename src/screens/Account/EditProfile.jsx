import {Text, View, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import icons from "../../assets/icons";
import {FloatingLabelTextInput} from "../../components/Inputs";
import {useFormik} from "formik";
import {CustomButton} from "../../components/Buttons";
import * as Yup from "yup";

const EditProfile = ({navigation}) => {
  const [activeField, setActiveField] = useState({
    name: false,
    email: false,
    phoneNumber: false,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    onSubmit: async values => {
      console.log(values);
    },
  });

  return (
    <View className="">
      <View className="px-3 flex flex-row items-center py-3 space-x-2 pt-4 pb-8 shadow shadow-[#84767640] mb-2">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}>
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
        <Text className="font-montserrat-bold text-black text-lg">
          Edit Account
        </Text>
      </View>
      <View className="px-3">
        <FloatingLabelTextInput
          label={"NAME"}
          id={"name"}
          formik={formik}
          edit={activeField.name}
          setEdit={setActiveField}
          isEdit={true}
        />
        {/* {activeField.name && (
          <View className="flex flex-row justify-between">
            <CustomButton
              containerStyles={`w-[48%] rounded-md py-3`}
              title={"Update"}
            />
            <CustomButton
              containerStyles={`w-[48%] rounded-md py-3`}
              title={"Cancel"}
            />
          </View>
        )} */}
        <FloatingLabelTextInput
          label={"Email ADDRESS"}
          id={"email"}
          formik={formik}
          edit={activeField.email}
          setEdit={setActiveField}
          isEdit={true}
        />
        <FloatingLabelTextInput
          label={"PHONE NUMBER"}
          id={"phoneNumber"}
          formik={formik}
          edit={activeField.phoneNumber}
          setEdit={setActiveField}
          isEdit={true}
        />
      </View>
    </View>
  );
};

export default EditProfile;
