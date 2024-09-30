import {Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import GetLocation from "react-native-get-location";
import MapView, {Marker, Callout} from "react-native-maps";

const Map = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setLocation(location);
        console.log("My Current Location: ", location);
      })
      .catch(error => {
        const {code, message} = error;
        console.log(code, message);
      });
  };

  const MyCustomCalloutView = () => {
    return (
      <View
        className="bg-black rounded-xl flex justify-center"
        style={{
          backgroundColor: "black",
          borderRadius: 20,
          padding: 10,
          borderColor: "black",
          borderWidth: 1,
        }}>
        <Text
          style={{fontSize: 12}}
          className="text-center text-white font-montserrat-bold">
          Order will be delivered here
        </Text>

        <Text
          style={{fontSize: 12}}
          className="text-center text-white font-proxima-nova-regular">
          Place the pin accurately on the map
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={{width: "100%", height: "100%"}}
        initialRegion={{
          latitude: 22.49635692943031,
          longitude: 76.97825709295205,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          draggable
          coordinate={{
            latitude: 22.49635692943031,
            longitude: 76.97825709295205,
          }}
          onDragEnd={e => {
            console.log({x: e.nativeEvent.coordinate});
          }}>
          <Callout tooltip>
            <MyCustomCalloutView />
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;
