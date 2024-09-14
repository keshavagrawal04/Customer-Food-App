import {
  ScrollView,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
  RefreshControl,
} from "react-native";
import {SearchInput} from "../../components/Inputs";
import React, {useState} from "react";
import icons from "../../assets/icons";
import {CustomCard, RestaurantCard} from "../../components/Cards";
import {PermissionModal, VoiceInput} from "../../components/Modals";
import {
  categories1,
  filterOptions,
  quickPicOptions,
  whatsInMind,
  dishes,
  restaurant,
} from "./constants";
import {AdvertisementCarousel} from "../../components/Carousels";

const Home = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedQuickPic, setSelectedQuickPic] = useState("nearBy");
  const [selectedFilter, setSelectedFilter] = useState("filter");
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [showPermissionAlert, setShowPermissionAlert] = useState({
    visible: false,
  });
  const [showVoiceAlert, setShowVoiceAlert] = useState({visible: false});
  const [refreshing, setRefreshing] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const requestMicrophonePermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setPermissionDenied(false);
          console.log("Microphone access granted");
        } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
          setPermissionDenied(true);
          console.log("Microphone permission denied");
        } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          setPermissionDenied(true);
          setShowPermissionAlert({
            visible: true,
            handleClose: () => {
              setShowPermissionAlert(prev => ({...prev, visible: false}));
            },
            handleAllow: () => {
              Linking.openSettings();
            },
            closeBtnTitle: "Cancel",
            allowBtnTitle: "Go To Settings",
            title: "Turn On Microphone permission",
            message:
              "Please go to Settings -> Microphone to turn on Microphone permission",
          });
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const checkMicrophonePermission = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );

    if (!hasPermission) {
      setShowPermissionAlert({
        visible: true,
        handleClose: () => {
          setShowPermissionAlert(prev => ({...prev, visible: false}));
        },
        handleAllow: handlePermissionAllow,
        closeBtnTitle: "Deny",
        allowBtnTitle: "Allow",
        title: "Allow Microphone Access for Voice Search",
        message: "It’ll help us translate voice to search",
      });
    } else {
      setShowVoiceAlert({visible: true});
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const handlePermissionAllow = () => {
    requestMicrophonePermission();
    setShowPermissionAlert(prev => ({...prev, visible: false}));
  };

  return (
    <ScrollView
      className="px-3 pt-2 bg-[#EFEBEB]"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      {/* Header */}
      <View className="flex flex-row justify-between items-start px-2 mt-2">
        <View className="flex flex-row items-start flex-1">
          <Image
            className="w-[20px] h-[20px] mt-1"
            source={icons.locationMarker}
          />
          <View className="ml-2">
            <View className="flex flex-row items-center">
              <Text className="text-black font-montserrat-bold text-base mr-1">
                Home
              </Text>
              <Image
                className="h-[20px] w-[20px]"
                source={icons.bottomArrowDark}
              />
            </View>
            <Text
              className="text-gray-600 text-sm font-montserrat-regular w-[50%] truncate"
              numberOfLines={1}>
              75, Chhatribag near yadav brothe sajhbjhdnasjn asjkn kjasn jnajkw
            </Text>
          </View>
        </View>

        <View className="bg-white rounded-xl p-2">
          <Image source={icons.notification} className="w-[24px] h-[24px]" />
        </View>
      </View>

      {/* Search Input & Veg Mode */}
      <View className="my-5 flex flex-row justify-between items-center">
        <View className="w-[90%]">
          <SearchInput
            placeholder={"Search..."}
            icon={icons.search}
            handleInputPress={() => {
              navigation.navigate("Search");
            }}
            handleMicrophonePress={checkMicrophonePermission}
          />
        </View>
        <View className="flex flex-column items-center">
          <Text
            className="text-black font-montserrat-bold"
            style={{fontSize: 14}}>
            VEG
          </Text>
          <Text
            className="text-black font-montserrat-bold text-sm"
            style={{fontSize: 10}}>
            MODE
          </Text>
          <Switch
            trackColor={{false: "#BEC4BD", true: "#BEC4BD"}}
            thumbColor={isEnabled ? "#00000040" : "#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      {/* Advertisement  */}
      <AdvertisementCarousel />

      {/* Food Categories Row 1 */}
      <View className="flex flex-row justify-between flex-wrap">
        {categories1?.map(item => (
          <View key={item.name} className="py-2">
            <Image
              className="w-[64px] h-[64px]"
              resizeMode="contain"
              source={item.image}
            />
            <Text className="text-black font-proxima-nova-regular text-center">
              {item.name}
            </Text>
          </View>
        ))}
      </View>

      {/* Quick Pics Text */}
      <View className="flex flex-row items-center justify-between mt-5">
        <Text className="text-black font-montserrat-bold text-sm">
          Quick Pics For You
        </Text>
        <TouchableOpacity>
          <Text className="text-primary-orange font-montserrat-semibold text-sm">
            View All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quick Pics For You */}
      <View className="flex flex-row gap-2 mt-2">
        {quickPicOptions?.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              setSelectedQuickPic(item.id);
            }}
            className={`px-3 py-2 rounded-full ${
              item.id === selectedQuickPic ? "bg-black" : "bg-white"
            }`}>
            <Text
              className={`font-proxima-nova-regular ${
                item.id === selectedQuickPic ? "text-white" : "text-black"
              }`}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* What's on your Mind Text */}
      <Text className="text-black font-montserrat-bold mt-4 text-sm">
        Rohan, What’s on your Mind
      </Text>

      {/* What's on your Mind Items */}
      <ScrollView
        horizontal
        className="flex flex-row gap-4 mt-1"
        showsHorizontalScrollIndicator={false}>
        {whatsInMind?.map(item => (
          <View key={item.id} className="flex items-center">
            <Image
              source={item.image}
              className="w-[68px] rounded-full h-[68px]"
              resizeMode="contain"
            />
            <Text className="text-black font-montserrat-bold">{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Most Searched Text */}
      <Text className="text-black font-montserrat-bold text-sm mt-8">
        Most Searched
      </Text>
      <ScrollView
        className="flex flex-row gap-2 mt-2"
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View>
          <CustomCard />
        </View>
        <View>
          <CustomCard />
        </View>
        <View>
          <CustomCard />
        </View>
      </ScrollView>

      {/* Filter Options */}
      <ScrollView
        horizontal
        className="flex flex-row gap-2 mt-4"
        showsHorizontalScrollIndicator={false}>
        {filterOptions?.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              setSelectedFilter(item.id);
            }}
            className={`px-3 py-2 rounded-full flex flex-row items-center ${
              item.id === selectedFilter ? "bg-black" : "bg-white"
            }`}>
            <Text
              className={`font-proxima-nova-regular ${
                item.id === selectedFilter ? "text-white" : "text-black"
              }`}>
              {item.name}
              {item?.icon && " "}
            </Text>
            {item?.icon ? (
              <Image
                source={
                  selectedFilter === item.id
                    ? item.activeIcon
                    : item.deactiveIcon
                }
                className="w-[14px] h-[14px]"
              />
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Top Restaurants */}
      <View className="flex flex-row items-center justify-between my-5">
        <Text className="text-black font-montserrat-bold text-lg">
          TOP 1550 Restaurants
        </Text>
        <TouchableOpacity>
          <Text className="text-primary-orange font-montserrat-semibold text-sm">
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <RestaurantCard dishes={dishes} restaurant={restaurant} />
      <RestaurantCard
        containerStyles={`mt-4`}
        dishes={dishes}
        restaurant={restaurant}
      />
      <RestaurantCard
        containerStyles={`mt-4`}
        dishes={dishes}
        restaurant={restaurant}
      />
      <RestaurantCard
        containerStyles={`mt-4`}
        dishes={dishes}
        restaurant={restaurant}
      />
      <View className="mt-24"></View>
      <PermissionModal
        visible={showPermissionAlert.visible}
        handleClose={showPermissionAlert.handleClose}
        title={showPermissionAlert.title}
        message={showPermissionAlert.message}
        handleAllow={showPermissionAlert.handleAllow}
        closeBtnTitle={showPermissionAlert.closeBtnTitle}
        allowBtnTitle={showPermissionAlert.allowBtnTitle}
      />
      <VoiceInput
        visible={showVoiceAlert.visible}
        handleClose={() => {
          setShowVoiceAlert(prev => ({...prev, visible: false}));
        }}
      />
    </ScrollView>
  );
};

export default Home;
