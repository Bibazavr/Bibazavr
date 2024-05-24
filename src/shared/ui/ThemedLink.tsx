import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";

import { useThemeColor } from "@/shared/hooks/useThemeColor";

export type ThemedTextProps = LinkProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedLink({
  style,
  lightColor,
  darkColor,
  href,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <Link href={href} style={[{ color }, styles.link, style]} {...rest} />;
}

const styles = StyleSheet.create({
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
