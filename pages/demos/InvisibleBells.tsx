import React from "react";
import { Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { globalStyles } from "../../GlobalStyles";
import Constants from "expo-constants";
import DemoSection from "../../components/DemoSection";

export default function InvisibleBells() {
  return (
    <ScrollView style={styles.scroll}>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://m.media-amazon.com/images/I/61y-diS0u7L._CR0,0,1280,675_SR580,306_.jpg"
        }
        overlayTitle={"Materials"}
        displayType={"Text"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              What do I need?
            </Text>
            <Text style={globalStyles.bodyText}>
              Scissors, string, wire hanger, table (or a wall, or a door), metal
              spoon You can also try a fork, potato peeler, metal spatula, or
              cake rack
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://m.media-amazon.com/images/I/61y-diS0u7L._CR0,0,1280,675_SR580,306_.jpg"
        }
        overlayTitle={"Proceedure"}
        displayType={"Text"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              What do I do?
            </Text>
            <Text style={globalStyles.bodyText}>
              1. With your scissors, cut a piece of string about 3 feet long.
              (Grown-ups should cut a piece about 4 feet long.) {"\n"}
              2. Hold the two ends of the string in one hand. The rest of the
              string will make a loop. {"\n"}3 Lay the loop over the hook part
              of the hanger. Push the two ends through the loop, and pull them
              all the way through the other side. (This is easier to undo than a
              knot.)
              {"\n"}
              4. Wrap the loose ends of the string two or three times around the
              first fingers on each hand. {"\n"}5 Swing the hanger so it gently
              bumps against the leg of a table, or against a door. What did it
              sound like? Probably not much.
              {"\n"}
              6. Now put your hands over the openings of your ears. (Dontt put
              your fingers in your ears ! ) Hold your hands tight to the sides
              of your head. Lean over and gently bump the hanger again.
              {"\n"}
              7. Wow! Now what does it sound like? Church bells? Chimes?
              {"\n"}
              8. Want to hear what a spoon sounds like? Unwrap your fingers,
              then pull on the loop end of the string. The whole string will
              come off the hanger, and you can reloop it around the spoon.
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://m.media-amazon.com/images/I/61y-diS0u7L._CR0,0,1280,675_SR580,306_.jpg"
        }
        overlayTitle={"What's Going On (1)?"}
        displayType={"Text"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              What's going on when I hear a sound?
            </Text>
            <Text style={globalStyles.bodyText}>
              You hear sounds when vibrations get inside your ears and stimulate
              your nerves to send electrical signals to your brain. Suppose, for
              instance, that you are pounding on a drum. The drumhead starts
              vibrating. As the drumhead vibrates, it bumps into air molecules
              and starts them bouncing to and fro. Those bouncing air molecules
              bump into other air molecules and start them moving. This chain
              reaction of moving air molecules carries sound through the air in
              a series of pulsating pressure waves that we call sound. Sound
              waves carry vibrations from the drum into your ears. Inside your
              ear, moving air molecules push on your eardrum and start it
              vibrating. Your eardrum, in turn, pushes on the bones of your
              middle ear, the tiniest bones in your body. These bones act like a
              set of levers, pushing against the thin membrane that covers the
              opening to your inner ear. The movement of this membrane makes
              pressure waves in the fluid inside the cochlea, where cells with
              tiny sensing hairs transform the waves into electrical signals.
              These electrical signals travel along the auditory nerve to your
              brain. When these electrical signals reach your brain, you hear a
              sound-the beat of a drum.
            </Text>
          </>
        }
      ></DemoSection>
      <DemoSection
        displayHeight={300}
        imageUri={
          "https://m.media-amazon.com/images/I/61y-diS0u7L._CR0,0,1280,675_SR580,306_.jpg"
        }
        overlayTitle={"What's Going On (2)?"}
        displayType={"Text"}
        content={
          <>
            <Text style={[globalStyles.headerTextLeft, globalStyles.tealText]}>
              How do the Secret Bells work?
            </Text>
            <Text style={globalStyles.bodyText}>
              When you pluck on the string that's wrapped around your friend's
              head, the string starts vibrating. To reach your ears, the
              vibrations in the string must push on the air molecules to make
              sound waves that travel through the air. But the string isn't very
              large and it doesntt push on very many air molecules. So sound
              vibrations don't travel easily from the string into the air. When
              the string is around your own head, the sound can take a more
              direct route to your ears. Rather than traveling through the air,
              the virbations can travel through your hands and through the bone
              of your skull directly to the fluid inside your cochlea in your
              inner ear. Instead of traveling from solid to air and back to
              solid, the vibrations move from one solid (the string) to another
              (your bones), and then into the fluid of your cochlea. As a
              result, the sound you hear is much louder and richer. The same
              thing happens with Secret Bells. When you put your hands over your
              ears, you provide a path that lets more of the vibrations reach
              your ears. When your hands arenft over your ears, you hear a
              faint, high-pitched, tinny sound. When you put your hands over
              your ears, you hear deep, resonant, bell-like tones. The hanger
              makes the same sound in both situations, but in one you provide a
              path that lets more of the sound reach your ears.
            </Text>
          </>
        }
      ></DemoSection>
    </ScrollView>
  );
}
