import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "react-native-reanimated";
import "@/shared/i18n";
import { Platform } from "react-native";

import { useColorScheme } from "@/shared/hooks/useColorScheme";

if (Platform.OS !== "web") {
  // Polyfill WebAssembly for the Rapier physics engine
  // https://github.com/pmndrs/react-three-rapier/issues/383
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const WebAssembly = require("polywasm").WebAssembly;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { TextEncoder, TextDecoder } = require("text-encoding");

  globalThis.WebAssembly = WebAssembly;
  globalThis.TextEncoder = TextEncoder;
  globalThis.TextDecoder = TextDecoder;
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
