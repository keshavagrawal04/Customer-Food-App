import {Text, View, Alert} from "react-native";
import React, {useState} from "react";
import {CustomButton} from "../components/Buttons";
import PhonePePaymentSDK from "react-native-phonepe-pg";
import Base64 from "react-native-base64";
import sha256 from "sha256";

const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
const MERCHANT_ID = "PGTESTPAYUAT";

const PhonePay = () => {
  const amount = 230 * 100;

  const handleSubmit = () => {
    PhonePePaymentSDK.init("SANDBOX", MERCHANT_ID, null, true)
      .then(resp => {
        const requestBody = {
          merchantId: "PGTESTPAYUAT",
          merchantTransactionId: "MT7850590068188104",
          merchantUserId: "MUID123",
          amount: 10000 * 100,
          redirectUrl: "https://webhook.site/redirect-url",
          redirectMode: "REDIRECT",
          callbackUrl: "https://webhook.site/callback-url",
          mobileNumber: "9999999999",
          paymentInstrument: {
            type: "PAY_PAGE",
          },
        };

        const payload = JSON.stringify(requestBody);
        const mainPayload = Base64.encode(payload);
        const stringToHash = mainPayload + "/pg/v1/pay" + SALT_KEY;
        const checkSum = sha256(stringToHash) + "###1";

        PhonePePaymentSDK.startTransaction(mainPayload, checkSum, null, null)
          .then(response => {
            console.log(response);
            Alert.alert("Payment Success", JSON.stringify(response));
          })
          .catch(error => {
            console.log(error);
            Alert.alert("Payment Failed", error.message);
          });
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Initialization Error", error.message);
      });
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
