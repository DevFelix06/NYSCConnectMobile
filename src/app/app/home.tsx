import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome to NYSC Connect 👋</Text>

      <Text style={styles.location}>
        Surulere, Lagos
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Accommodation near you</Text>

        <Text style={styles.cardText}>
          Find verified accommodation options close to your PPA.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/accommodation")}
        >
          <Text style={styles.buttonText}>View Accommodation</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },

  greeting: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 50,
  },

  location: {
    color: "#666",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 30,
  },

  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    padding: 20,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  cardText: {
    color: "#666",
    lineHeight: 22,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#111",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});