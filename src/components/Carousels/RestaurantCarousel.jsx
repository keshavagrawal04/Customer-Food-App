import React, {useState, useRef, useEffect} from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import images from "../../assets/images";
import icons from "../../assets/icons";

const {width} = Dimensions.get("window");

const RestaurantCarousel = ({dishes}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const AUTO_SCROLL_INTERVAL = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % dishes.length;
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [currentIndex, dishes.length]);

  const onViewableItemsChanged = ({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewAbilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={dishes}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewAbilityConfig}
        renderItem={({item}) => (
          <View
            style={{width: width - 22}}
            className="h-[280px] flex items-center justify-center">
            <Image
              source={item.image}
              className="h-full w-full"
              resizeMode="contain"
            />
            <Text className="absolute top-4 left-5 text-black font-proxima-nova-regular bg-white rounded-full py-2 px-3">
              {item.name} • &#8377;{item.price}
            </Text>
            <View className="absolute top-4 right-5 flex gap-2">
              <TouchableOpacity className="rounded-full bg-white p-2">
                <Image source={icons.wishlist} className="w-[22px] h-[22px]" />
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full bg-white p-2">
                <Image source={icons.add} className="w-[22px] h-[22px]" />
              </TouchableOpacity>
            </View>
            <View className="absolute bottom-4 left-5 bg-secondary-green rounded-full py-2 px-3 flex flex-row items-center">
              <Image source={icons.clockLight} className="w-[15px] h-[15px]" />
              <Text className=" text-white font-proxima-nova-regular">
                {" "}
                {item.time}. • {item.distance}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.pagination}>
        {dishes.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
  },
  dot: {
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeDot: {
    width: 12,
    height: 4,
    backgroundColor: "#FFFFFF",
  },
  inactiveDot: {
    width: 6,
    height: 6,
    backgroundColor: "#FFFFFF",
  },
});

export default RestaurantCarousel;
