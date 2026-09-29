import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Location() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where are you posted?</Text>

      <Text style={styles.subtitle}>
        Enter your posting location so we can find accommodation near your PPA.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="State e.g. Lagos"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="LGA e.g. Surulere"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="PPA"
        placeholderTextColor="#888"
      />

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/home")}
      >
        <Text style={styles.buttonText}>Find Accommodation</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },

  subtitle: {
    color: "#666",
    lineHeight: 22,
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 14,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#111",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});