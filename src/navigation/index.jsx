import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {
  Login,
  OtpVerification,
  LocationAccess,
  Location,
} from "../screens/Authentication";
import {Splash, HomeScreen, SearchScreen, VegFilterPage} from "../screens";
import {Checkout, Policy} from "../screens/Delivery";
import {
  EditProfile,
  LogoutOptions,
  Addresses,
  RefundStatus,
  Refer,
  Settings,
  Map,
} from "../screens/Account";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: "#FFFFFF"},
        }}
        initialRouteName="Map">
        <Stack.Screen name="Map" component={Map} />
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
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="LogoutOptions" component={LogoutOptions} />
        <Stack.Screen name="Addresses" component={Addresses} />
        <Stack.Screen name="RefundStatus" component={RefundStatus} />
        <Stack.Screen name="Refer" component={Refer} />
        <Stack.Screen name="Settings" component={Settings} />
        {/* <Stack.Screen name="ReOrders" component={ReOrders} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
