import {Text, View, Alert} from "react-native";
import React, {useState} from "react";
import {CustomButton} from "../components/Buttons";
import PhonePePaymentSDK from "react-native-phonepe-pg";
import Base64 from "react-native-base64";
import sha256 from "sha256";

// Constants for PhonePe integration
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
const MERCHANT_ID = "PGTESTPAYUA86";

const PhonePay = () => {
  // Transaction amount in paise
  const amount = 230 * 100;

  // Function to handle the payment process
  const handleSubmit = async () => {
    try {
      // Initialize the PhonePe Payment SDK
      await PhonePePaymentSDK.init("SANDBOX", MERCHANT_ID, null, true);

      // Prepare the request body for payment
      const requestBody = {
        merchantId: MERCHANT_ID,
        merchantTransactionId: "MT7850590068188104",
        merchantUserId: "MUID123",
        amount: 10000 * 100, // Amount in paise (e.g. ₹10000 is 10000 * 100 paise)
        redirectUrl: "https://webhook.site/redirect-url",
        redirectMode: "REDIRECT",
        callbackUrl: "https://webhook.site/callback-url",
        mobileNumber: "9999999999",
        paymentInstrument: {
          type: "PAY_PAGE",
        },
      };

      // Create the payload and calculate checksum
      const payload = JSON.stringify(requestBody);
      const encodedPayload = Base64.encode(payload);
      const stringToHash = encodedPayload + "/pg/v1/pay" + SALT_KEY;
      const checkSum = sha256(stringToHash) + "###1";

      console.log("Generated Checksum:", checkSum);

      // Start the transaction
      const response = await PhonePePaymentSDK.startTransaction(
        encodedPayload,
        checkSum,
        null,
        null,
      );

      // Success response
      console.log("Payment Success:", response);
      Alert.alert("Payment Success", JSON.stringify(response));
    } catch (error) {
      // Handle errors during the initialization or payment process
      console.error("Error:", error.message);
      Alert.alert("Payment Failed", error.message);
    }
  };

  return (
    <View className="h-full flex justify-center">
      <Text className="text-center text-primary-orange font-montserrat-bold text-xl">
        Pay Using PhonePe
      </Text>

      <View className="px-4 rounded-xl py-4">
        <CustomButton
          title={`Pay | ₹${amount / 100}`}
          containerStyles={"py-4 rounded-xl"}
          handleOnPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default PhonePay;
