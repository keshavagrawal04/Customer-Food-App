import React, {useState, useRef} from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";
import images from "../../assets/images";

const {width} = Dimensions.get("window");

const imagesArray = [images.advertisement, images.advertisement];

const AdvertisementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

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
        data={imagesArray}
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
            className="flex items-center justify-center px-1"
            style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
      <View style={styles.pagination}>
        {imagesArray.map((_, index) => {
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
    marginBottom: 30,
  },
  imageContainer: {
    height: 180,
    width: width - 25,
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: -15,
    alignItems: "center",
  },
  dot: {
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeDot: {
    width: 12,
    height: 4,
    backgroundColor: "#000000",
  },
  inactiveDot: {
    width: 6,
    height: 6,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default AdvertisementCarousel;
