import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { FontAwesome } from "@expo/vector-icons";
import DashboardHeader from "@/components/dashboard/commons/dashboard-header";

export default function TabLayout() {
  return (
    <>
      <DashboardHeader />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#2157F7",
          tabBarInactiveTintColor: "#B7C9C7",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="send"
          options={{
            title: "Send",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                name={focused ? "send" : "send-o"}
                size={28}
                style={{ marginBottom: -4 }}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="my-qr"
          options={{
            title: "My QR",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "qr-code" : "qr-code-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
