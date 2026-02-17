import { Tabs, Redirect } from "expo-router";
import { useSignerStatus } from "@account-kit/react-native";
import { AlchemySignerStatus } from "@account-kit/signer";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  const { status, isAuthenticating } = useSignerStatus();

  if (isAuthenticating) return null;

  if (status === AlchemySignerStatus.DISCONNECTED) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1E9E6A", //Warima Green
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="leaf" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="credit-card" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
