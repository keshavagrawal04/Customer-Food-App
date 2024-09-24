import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  Alert,
} from "react-native";
import {CustomButton} from "../../components/Buttons";
import {OtpInput} from "react-native-otp-entry";
import {startOtpListener, removeListener} from "react-native-otp-verify";
import {Apis} from "../../utils";
import {v4 as uuid} from "uuid";

const OtpVerification = ({route, navigation}) => {
  const {mobileNumber, verificationId, customerId} = route.params;
  const [otp, setOtp] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestSmsPermission = async () => {
      if (Platform.OS === "android") {
        try {
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_SMS,
            PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
          ]);

          if (
            granted["android.permission.READ_SMS"] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            granted["android.permission.RECEIVE_SMS"] ===
              PermissionsAndroid.RESULTS.GRANTED
          ) {
            console.log("SMS permissions granted");

            startOtpListener(message => {
              console.log("OTP Message:", message);
              const otpMatch = /(\d{6})/g.exec(message);
              if (otpMatch) {
                setOtp(otpMatch[1]);
                console.log("Extracted OTP:", otpMatch[1]);
              } else {
                console.warn("No OTP found in the message.");
              }
            });
          } else {
            console.log("SMS permissions denied");
            Alert.alert(
              "Permission Denied",
              "SMS permission is required to receive OTP automatically.",
            );
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };

    requestSmsPermission();

    return () => {
      removeListener();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRetryOtp = () => {
    setSecondsLeft(60);
    setLoading(true);
    setLoading(false);
  };

  const handleOtpSubmit = async () => {
    const response = await Apis.verifyOtp(
      mobileNumber,
      customerId,
      otp,
      verificationId,
    );
    if (response?.data?.responseCode == 200) {
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <View className="px-4 mt-16">
      <Text className="text-secondary-gray font-montserrat-bold text-2xl">
        Verify with OTP sent to
      </Text>
      <Text className="text-secondary-gray font-montserrat-bold text-2xl">
        {mobileNumber}
      </Text>
      <View className="my-8">
        <OtpInput
          numberOfDigits={4}
          value={otp}
          focusColor="rgba(253, 99, 31, 1)"
          focusStickBlinkingDuration={500}
          onTextChange={text => console.log("Text Change:", text)}
          onFilled={text => setOtp(text)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          theme={{
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            containerStyle: styles.container,
          }}
        />
        {secondsLeft > 0 && (
          <View className="flex flex-row items-center justify-center gap-3 mt-9">
            <ActivityIndicator size={"large"} color={"rgba(253, 99, 31, 1)"} />
            <Text className="font-proxima-nova-regular text-secondary-gray-light text-lg">
              Auto Fetching OTP
            </Text>
          </View>
        )}
      </View>
      <CustomButton
        title={"Continue"}
        containerStyles={"py-4 rounded-full mt-5"}
        textStyles={"text-center text-lg"}
        handleOnPress={() => {
          handleOtpSubmit();
        }}
      />
      <View className="mt-6">
        {secondsLeft > 0 ? (
          <Text className="text-center text-secondary-gray-light font-proxima-nova-regular text">
            Didn’t Receive it? Retry in 00:
            {secondsLeft.toString().padStart(2, "0")}
          </Text>
        ) : (
          <TouchableOpacity onPress={handleRetryOtp}>
            <Text className="text-center text-primary-orange text-xl font-montserrat-bold underline">
              Retry
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  pinCodeContainer: {
    width: 48,
    height: 48,
    borderColor: "black",
    borderWidth: 1,
  },
  pinCodeText: {
    fontFamily: "Proxima-Nova-Bold",
    color: "black",
  },
  activePinCodeContainer: {
    borderColor: "rgba(253, 99, 31, 1)",
    borderWidth: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    gap: 25,
  },
});
