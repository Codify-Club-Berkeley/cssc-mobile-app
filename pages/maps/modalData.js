import * as carouselData from "../../components/carousel/data";
import { Dimensions } from "react-native";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export const map1ModalViewData = [
  {
    Index: 0,
    Name: "Studio 1",
    NavLocation: "Studio 1",
    Description:
      "The NASA Experience is a hands-on exhibition that brings to life the thrilling, challenging and inspiring process of scientific discovery by showcasing the real stories and people at NASA’s Ames Research Center. Visitors step into the role of a NASA scientist through embarking on hands-on challenges, exploring more than 30+ objects that showcase Ames’ past and future, and getting to know real NASA scientists.",
    positionData: { xPos: DEVICE_WIDTH / 1.6, yPos: DEVICE_HEIGHT / 3.2 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
  {
    Index: 1,
    Name: "Cafe",
    NavLocation: "Cafe",
    Description: "The Chabot Cafe",

    positionData: { xPos: DEVICE_WIDTH / 2.03, yPos: DEVICE_HEIGHT / 4.4 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
  {
    Index: 2,
    Name: "Touch The Sun",
    NavLocation: "Touch The Sun",
    Description: "",
    positionData: { xPos: DEVICE_WIDTH / 2.38, yPos: DEVICE_HEIGHT / 2.88 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
  {
    Index: 3,
    Name: "Chabot Planetarium",
    NavLocation: "Planetarium Schedule",
    Description: "",
    positionData: { xPos: DEVICE_WIDTH / 1.5, yPos: DEVICE_HEIGHT / 2.5 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
];

export const map2ModalViewData = [
  {
    Index: 0,
    Name: "Studio 2",
    NavLocation: "Studio 2",
    Description:
      "Explore how humans are expanding our boundaries by moving farther into the Universe than ever before. With inspiration and content provided by NASA’s Ames Research Center, Caltech’s Jet Propulsion Laboratory, Planet, and SpaceX, the exhibit traces our journey through the cosmos, and where we are headed.",
    positionData: { xPos: DEVICE_WIDTH / 1.5, yPos: DEVICE_HEIGHT / 3.05 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
  {
    Index: 1,
    Name: "Chabot Planetarium",
    NavLocation: "Planetarium Schedule",
    Description: "",
    positionData: { xPos: DEVICE_WIDTH / 1.5, yPos: DEVICE_HEIGHT / 1.85 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
];

export const map3ModalViewData = [
  {
    Index: 0,
    Name: "Observation Deck",
    NavLocation: "Observation Deck",
    Description: "",
    positionData: { xPos: DEVICE_WIDTH / 1.8, yPos: DEVICE_HEIGHT / 4.9 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
  {
    Index: 1,
    Name: "Studio 3",
    NavLocation: "Studio 3",
    Description:
      "What would be different if you lived and worked on another planet? Living and building outside of Earth means leaving behind the life-sustaining features of our world. Our out-of-this world homes need to mimic Earth’s environment, but how will we build them?",
    positionData: { xPos: DEVICE_WIDTH / 1.9, yPos: DEVICE_HEIGHT / 2.35 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
  {
    Index: 2,
    Name: "Nellie",
    NavLocation: "Nellie",
    Description: "",
    positionData: { xPos: DEVICE_WIDTH / 13, yPos: DEVICE_HEIGHT / 16 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
  {
    Index: 3,
    Name: "Rachel",
    NavLocation: "Rachel",
    Description: "",
    positionData: { xPos: DEVICE_WIDTH / 8, yPos: DEVICE_HEIGHT / 6 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
  {
    Index: 4,
    Name: "Leah",
    NavLocation: "Leah",
    Description: "",
    positionData: { xPos: DEVICE_WIDTH / 8, yPos: DEVICE_HEIGHT / 3.7 },
    carousel: carouselData.Studio1Carousel,
    Next: "",
    Previous: "",
  },
];
