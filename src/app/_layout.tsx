import { Stack } from "expo-router";

import { Screens } from "@/shared/constants/Screens";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name={Screens.Home} />
    </Stack>
  );
}
