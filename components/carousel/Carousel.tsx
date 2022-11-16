import React from "react";
import { SafeAreaView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import { Studio1Carousel, TouchTheSunCarousel } from "./data";

export default function CarouselCards(props) {
  //const [index, setIndex] = React.useState(0);
  //const isCarousel = React.useRef(null);
  //ref={isCarousel}
  // onSnapToItem={(index) => setIndex(index)}
  return (
    <View
      style={{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 150,
        borderWidth: 0,
      }}
    >
      <Carousel
        layout="default"
        data={props.imageList}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        enableSnap={true}
        loop={true}
      />
      {/** <Pagination
        dotsLength={props.imageList.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotContainerStyle={{ height: 0 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />*/}
    </View>
  );
}
