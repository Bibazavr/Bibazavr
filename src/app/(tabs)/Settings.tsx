import { ThemedView } from "@/shared/ui/ThemedView";
import { ThemedText } from "@/shared/ui/ThemedText";
import { ThemedLink } from "@/shared/ui/ThemedLink";

export default function Settings() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Settings</ThemedText>
      <ThemedLink href={"/"}>Logout</ThemedLink>
    </ThemedView>
  );
}
