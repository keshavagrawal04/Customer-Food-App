import React, {useState, useEffect, useRef} from "react";
import {
  PermissionsAndroid,
  Platform,
  Text,
  View,
  Image,
  Alert,
  Linking,
  Animated,
  Easing,
} from "react-native";
import GetLocation from "react-native-get-location";
import {CustomButton} from "../../components";
import icons from "../../assets/icons";
import images from "../../assets/images";

const LocationAccess = ({navigation}) => {
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [location, setLocation] = useState({});
  const [currentIcon, setCurrentIcon] = useState(icons.circle1);

  const circleAnimation = useRef(new Animated.Value(0)).current;

  const circleIcons = [icons.circle1, icons.circle2, icons.circle3];

  const requestLocationAccess = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setPermissionDenied(false);
          console.log("Location access granted");
        } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
          setPermissionDenied(true);
          console.log("Location permission denied");
        } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          setPermissionDenied(true);
          Alert.alert(
            "Permission Required",
            "Location permission is required to show better delivery results. Please enable it from settings.",
            [
              {text: "Cancel", style: "cancel"},
              {text: "Open Settings", onPress: () => Linking.openSettings()},
            ],
          );
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const checkLocationPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (!hasPermission) {
      requestLocationAccess();
    }
  };

  // const getCurrentLocation = () => {
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 60000,
  //   })
  //     .then(location => {
  //       setLocation(location);
  //       console.log("My Current Location: ", location);
  //     })
  //     .catch(error => {
  //       const {code, message} = error;
  //       console.log(code, message);
  //     });
  // };

  useEffect(() => {
    Animated.loop(
      Animated.timing(circleAnimation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, [circleAnimation]);

  useEffect(() => {
    const iconSwitchInterval = setInterval(() => {
      setCurrentIcon(prevIcon => {
        const nextIndex =
          (circleIcons.indexOf(prevIcon) + 1) % circleIcons.length;
        return circleIcons[nextIndex];
      });
    }, 1000);

    return () => clearInterval(iconSwitchInterval);
  }, []);

  const circleSize1 = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 24],
  });

  const circleSize2 = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [24, 28],
  });

  return (
    <View className="px-4 mt-16">
      <Text className="text-secondary-gray font-montserrat-bold text-2xl">
        What’s your location?
      </Text>
      <Text className="text-secondary-gray-light font-proxima-nova-regular text-base">
        We need your location to show better delivery results.
      </Text>

      <View className="my-8">
        <Image source={images.location} className="w-[330px] h-[330px]" />
        <Animated.Image
          source={currentIcon}
          style={{
            width: circleSize1,
            height: 4,
            position: "absolute",
            top: 80,
            left: 158,
          }}
        />
        <Animated.Image
          source={currentIcon}
          style={{
            width: circleSize2,
            height: 4,
            position: "absolute",
            bottom: 25,
            left: 198,
          }}
        />
      </View>

      <CustomButton
        title={"Allow Location Access"}
        containerStyles={"py-4 rounded-xl"}
        textStyles={"text-center text-lg"}
        variant="primary-fill"
        icon={icons.location}
        iconStyle={"w-[20px] h-[20px]"}
        handleOnPress={
          permissionDenied
            ? () => Linking.openSettings()
            : checkLocationPermission
        }
      />

      <CustomButton
        title={"Select Location Manually"}
        variant="primary-outline"
        containerStyles={"py-4 rounded-xl mt-4"}
        textStyles={"text-center text-lg"}
        handleOnPress={() => navigation.navigate("Location")}
      />
    </View>
  );
};

export default LocationAccess;
