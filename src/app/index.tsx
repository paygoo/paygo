import { Link } from "expo-router";
import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import bg from "../assets/gradient.png";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Page() {
  return (
    <View className="flex flex-1 h-screen overflow-hidden">
      <ImageBackground source={bg} style={styles.image} />
      <Content />
    </View>
  );
}

function Content() {
  return (
    <View className="flex-1 justify-center bg-background/60">
      <View className="">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <View className="flex flex-col items-center gap-2">
              <Text
                role="heading"
                className="text-foreground/60 font-semibold text-lg"
              >
                Welcome to
              </Text>
              <Text
                role="heading"
                className="text-6xl text-center native:text-5xl text-primary font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              >
                PayBase
              </Text>
            </View>
            <Text className="mx-auto max-w-[30ch] text-lg text-center text-muted brightness-125 md:text-xl">
              Your go to platform for all your payment needs, for Base.
            </Text>

            <View className="gap-4">
              <Link
                role="button"
                href={"/dashboard"}
                className="p-4 text-white bg-primary rounded-full px-6 py-4 inline-flex items-center"
              >
                Get Started <AntDesign name="right" size={12} />
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    top: 40,
    left: -180,
    flex: 1,
    position: "absolute",
    resizeMode:'contain'
  },
});
