import React from "react";
import { SafeAreaView, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import { data, data2 } from "./data";

export default function CarouselCards(props) {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          height: 200,
          borderWidth: 1,
        }}
      >
        <View style={{ zIndex: 2 }}>
          <Carousel
            layout="default"
            ref={isCarousel}
            data={props.imageList}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
            enableSnap={true}
            loop={true}
          />
        </View>
        <View style={{ zIndex: 1 }}>
          <Pagination
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
          />
        </View>
      </View>
    </View>
  );
}