import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Account, Cart, Home, Reorder, Restaurants} from "./Tabs";
import {Image, View, Text} from "react-native";
import icons from "../assets/icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 55,
    elevation: 0,
  },
};

const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center">
              {focused ? (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.homeActive}
                />
              ) : (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.homeDeactive}
                />
              )}
              <Text
                className={`font-montserrat-bold text-center ${
                  focused ? "text-primary-orange" : "text-black"
                }`}
                style={{fontSize: 11}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center">
              {focused ? (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.restaurantActive}
                />
              ) : (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.restaurantDeactive}
                />
              )}
              <Text
                className={`font-montserrat-bold text-center ${
                  focused ? "text-primary-orange" : "text-black"
                }`}
                style={{fontSize: 11}}>
                Restaurants
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center">
              {focused ? (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.cartActive}
                />
              ) : (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.cartDeactive}
                />
              )}
              <Text
                className={`font-montserrat-bold text-center ${
                  focused ? "text-primary-orange" : "text-black"
                }`}
                style={{fontSize: 11}}>
                Eatlist
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Reorder}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center">
              {focused ? (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.orderActive}
                />
              ) : (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.orderDeactive}
                />
              )}
              <Text
                className={`font-montserrat-bold text-center ${
                  focused ? "text-primary-orange" : "text-black"
                }`}
                style={{fontSize: 11}}>
                Reorder
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center">
              {focused ? (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.accountActive}
                />
              ) : (
                <Image
                  className="w-[26px] h-[26px]"
                  resizeMode="contain"
                  source={icons.accountDeactive}
                />
              )}
              <Text
                className={`font-montserrat-bold text-center ${
                  focused ? "text-primary-orange" : "text-black"
                }`}
                style={{fontSize: 11}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
