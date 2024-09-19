import React, {useEffect, useState} from "react";
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import icons from "../../assets/icons";
import Voice from "@react-native-community/voice";

const VoiceInput = ({visible, handleClose}) => {
  const [isListing, setIsListening] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.removeAllListeners();
    };
  }, []);

  const onSpeechStart = () => {
    console.log("Recording Started...");
  };

  const onSpeechEnd = () => {
    console.log("Recording Stopped...");
  };

  const onSpeechResults = event => {
    console.log("Result: ", event.value[0]);
    setIsListening(false);
    setResult(event?.value);
  };

  const onSpeechError = error => {
    console.log("Error on Speech: ", error?.error);
    setError(true);
  };

  const startListing = async () => {
    setIsListening(true);
    try {
      await Voice.start("en-US");
    } catch (error) {
      console.log("Error While Starting : ", error);
    }
  };

  const stopListing = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.log("Error While Stopping: ", error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View className={`flex-1 justify-end items-center bg-black/50`}>
          <View className={`w-[90%] p-5 bg-white rounded-t-3xl shadow-lg`}>
            <Text className="text-center text-secondary-gray-light pt-5 text-base font-proxima-nova-regular">
              {isListing
                ? "Listening..."
                : error
                ? "Sorry, I didn’t get that. try saying..."
                : "Hi, I’m Listening. Try Saying..."}
            </Text>
            <Text className="text-center text-black pt-5 text-xl font-montserrat-bold px-5">
              {result && `"${result}"`}
            </Text>
            <View className="flex items-center justify-center my-8">
              <TouchableOpacity
                onPress={isListing ? stopListing : startListing}
                className={`p-3 rounded-full border-[5px] border-[#fd631f33] ${
                  !isListing ? "bg-secondary-green" : "bg-red-600"
                }`}>
                <Image
                  source={icons.microphoneLight}
                  className="w-[34px] h-[34px]"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default VoiceInput;
