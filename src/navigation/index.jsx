import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {
  Login,
  OtpVerification,
  LocationAccess,
  Location,
} from "../screens/Authentication";
import {
  Splash,
  HomeScreen,
  SearchScreen,
  VegFilterPage,
  Razorpay,
} from "../screens";
import {Checkout, Policy} from "../screens/Delivery";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: "#FFFFFF"},
        }}
        initialRouteName="Checkout">
        <Stack.Screen name="Razorpay" component={Razorpay} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="LocationAccess" component={LocationAccess} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="VegFilterPage" component={VegFilterPage} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Policy" component={Policy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
