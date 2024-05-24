import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

import { Screens } from "@/shared/constants/Screens";

export default function TabLayout() {
  const { t } = useTranslation();
  return (
    <Tabs
      screenOptions={({ route: { name } }) => ({
        title: t(name as Screens),
        tabBarActiveTintColor: "blue",
      })}
    >
      <Tabs.Screen
        name={Screens.Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={Screens.Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
