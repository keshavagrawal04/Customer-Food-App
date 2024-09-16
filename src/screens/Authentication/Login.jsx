import {Text, View} from "react-native";
import React from "react";
import {useFormik} from "formik";
import {FloatingLabelTextInput} from "../../components/Inputs";
import {CustomButton} from "../../components/Buttons";
import * as Yup from "yup";

const Login = ({navigation}) => {
  const formik = useFormik({
    initialValues: {mobile_number: ""},
    validationSchema: Yup.object({
      mobile_number: Yup.string()
        .required("Mobile number is required")
        .matches(/^[0-9]+$/, "Mobile number must be only digits")
        .min(10, "Mobile number must be at least 10 digits")
        .max(10, "Mobile number must be at most 10 digits"),
    }),
    onSubmit: async values => {
      navigation.navigate("OtpVerification", {
        mobileNumber: values.mobile_number,
      });
    },
  });

  return (
    <View className="px-4 mt-16">
      <Text className="text-secondary-gray font-montserrat-bold text-2xl">
        Enter Your Mobile
      </Text>
      <Text className="text-secondary-gray font-montserrat-bold text-2xl">
        Number to Get OTP
      </Text>
      <View className="mt-10">
        <FloatingLabelTextInput
          id={"mobile_number"}
          formik={formik}
          label={"Mobile Number"}
          inputStyles={"py-4"}
          type="numeric"
        />
      </View>
      <CustomButton
        title={"Get OTP"}
        containerStyles={"py-4 rounded-full"}
        textStyles={"text-center text-lg"}
        handleOnPress={formik.handleSubmit}
      />
      <View className="mt-4">
        <Text className="text-center text-secondary-gray font-proxima-nova-regular text">
          By clicking, I accept the{" "}
          <Text className="font-proxima-nova-bold">Term of services </Text>
          and <Text className="font-proxima-nova-bold">Privacy Policy.</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
