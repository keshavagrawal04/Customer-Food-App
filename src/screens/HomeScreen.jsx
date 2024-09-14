import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Account, Cart, Home, Orders, Restaurants} from "./Tabs";
import {Image, View} from "react-native";
import icons from "../assets/icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 10,
    right: 0,
    left: 0,
    height: 70,
    elevation: 0,
    marginHorizontal: 15,
    borderRadius: 50,
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
            <View className="w-[30px] h-[30px]">
              {focused ? (
                <Image
                  className="w-full h-full"
                  resizeMode="contain"
                  source={icons.homeActive}
                />
              ) : (
                <Image
                  className="w-full h-full"
                  resizeMode="contain"
                  source={icons.homeDeactive}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="w-[30px] h-[30px]">
              {focused ? (
                <Image
                  className="w-full h-full"
                  resizeMode="contain"
                  source={icons.restaurantActive}
                />
              ) : (
                <Image
                  className="w-full h-full"
                  resizeMode="contain"
                  source={icons.restaurantDeactive}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="bg-primary-orange rounded-full p-2">
              {focused ? (
                <Image
                  className="w-[30px] h-[30px]"
                  resizeMode="contain"
                  source={icons.cartDeactive}
                />
              ) : (
                <Image
                  className="w-[30px] h-[30px]"
                  resizeMode="contain"
                  source={icons.cartDeactive}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="w-[30px] h-[30px]">
              {focused ? (
                <Image
                  className="w-full h-full"
                  resizeMode="contain"
                  source={icons.orderActive}
                />
              ) : (
                <Image
                  className="w-full h-full"
                  resizeMode="contain"
                  source={icons.orderDeactive}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="w-[30px] h-[30px]">
              {focused ? (
                <Image
                  className="w-full h-full"
                  resizeMode="contain"
                  source={icons.homeActive}
                />
              ) : (
                <Image
                  className="w-full h-full"
                  resizeMode="contain"
                  source={icons.accountDeactive}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
