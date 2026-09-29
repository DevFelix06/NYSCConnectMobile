import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NYSC Connect</Text>

      <View style={styles.content}>
        <Text style={styles.title}>
          Find accommodation closer to your PPA.
        </Text>

        <Text style={styles.subtitle}>
          Discover accommodation that fits your location and budget.
        </Text>

        <Pressable
          style={styles.button}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
    justifyContent: "center",
  },

  logo: {
    position: "absolute",
    top: 60,
    left: 24,
    fontSize: 24,
    fontWeight: "700",
  },

  content: {
    width: "100%",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666666",
    marginBottom: 32,
  },

  button: {
    width: "100%",
    backgroundColor: "#111111",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});