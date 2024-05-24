import { ThemedView } from "@/shared/ui/ThemedView";
import { ThemedText } from "@/shared/ui/ThemedText";
import { ThemedLink } from "@/shared/ui/ThemedLink";
import { HelloWave } from "@/shared/ui/HelloWave";

export default function Welcome() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>
        Welcome <HelloWave />
      </ThemedText>
      <ThemedLink href={"/Home"}>Let&apos;s go</ThemedLink>
    </ThemedView>
  );
}
