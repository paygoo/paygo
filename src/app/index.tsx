import { Link } from "expo-router";
import React from "react";
import { Text, View, ImageBackground } from "react-native";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Content />
    </View>
  );
}

function Content() {
  return (
    <View className="flex-1 justify-center">
      <View className="lg:py-32">
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
            <Text className="mx-auto max-w-[30ch] text-lg text-center text-muted md:text-xl dark:text-gray-400">
              Your go to platform for all your payment needs, for Base.
            </Text>

            <View className="gap-4">
              <Link
                role="button"
                href={"/dashboard"}
                className="p-4 text-white bg-primary rounded-full px-6 py-4"
              >
                Get Started
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
