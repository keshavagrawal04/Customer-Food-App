import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import icons from "../../assets/icons";
import React, {useEffect, useState} from "react";
import GetLocation from "react-native-get-location";
import MapView, {Marker, Callout} from "react-native-maps";
import {FullScreenLoader} from "../../components/Loaders";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {CustomButton} from "../../components/Buttons";

const Map = ({navigation}) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setLocation({
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        console.log("My Current Location: ", location);
      })
      .catch(error => {
        const {code, message} = error;
        console.log(code, message);
      });
  };

  const MyCustomCalloutView = () => {
    return (
      <View style={styles.calloutView}>
        <Text style={styles.calloutTitle}>Order will be delivered here</Text>
        <Text style={styles.calloutDescription}>
          Place the pin accurately on the map
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1">
      <View className="bg-[#F4F4F4] pb-2">
        <View className="px-3 bg-white flex flex-row items-center py-3 space-x-2 pt-4 mb-2">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}>
            <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
          </TouchableOpacity>
          <Text className="font-montserrat-bold text-black text-lg">
            Select delivery location
          </Text>
        </View>
      </View>

      <View className="flex-1 relative">
        {/* Search Bar Container */}
        <View className="z-10 absolute right-5 left-5 top-5 rounded-full">
          <GooglePlacesAutocomplete
            placeholder="Search for a building, street name, or area"
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: "AIzaSyDhtddm6vtv2Gd3Nw0w4_ual8uUQuyzxfI",
              language: "en",
            }}
            onFail={error => {
              console.log(error);
            }}
            styles={{
              textInput: {
                color: "black",
                fontSize: 16,
                borderRadius: 250,
                paddingHorizontal: 15,
              },
            }}
          />
        </View>
        {location ? (
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            style={{flex: 1}}
            initialRegion={location}
            showsUserLocation={true}
            followsUserLocation={true}>
            <Marker
              draggable
              coordinate={location}
              onDragEnd={e => {
                console.log({x: e.nativeEvent.coordinate});
              }}>
              <Callout tooltip>
                <MyCustomCalloutView />
              </Callout>
            </Marker>
          </MapView>
        ) : (
          <FullScreenLoader />
        )}
        {/* Locate Me Button */}
        <View className="z-10 absolute bottom-5 left-0 right-0 rounded-full">
          <View className="flex flex-row justify-center">
            <TouchableOpacity
              onPress={() => {
                getCurrentLocation();
              }}
              className="font-proxima-nova-regular flex flex-row items-center space-x-2 rounded-full bg-white px-5 py-4">
              <Image
                source={icons.locationTarget}
                className="w-[26px] h-[26px]"
              />
              <Text className="text-primary-orange font-montserrat-bold">
                LOCATE ME
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="bg-[#F4F4F4]">
        <View className="px-3 flex flex-row justify-center bg-white items-center py-3 space-x-2 pt-4">
          <CustomButton
            title={"CONFIRMATION LOCATION"}
            containerStyles={`py-4 w-full rounded-full`}
          />
        </View>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  calloutView: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  calloutTitle: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  calloutDescription: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
});
