import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Welcome back</Text>
      <Text style={styles.title}>Find your accommodation</Text>

      <View style={styles.locationCard}>
        <Text style={styles.cardLabel}>YOUR POSTING LOCATION</Text>
        <Text style={styles.location}>Surulere, Lagos</Text>
        <Text style={styles.ppa}>PPA: Ojuelegba</Text>
      </View>

      <Text style={styles.sectionTitle}>Recommended near you</Text>
      <View style={styles.listingCard}>
        <View style={styles.imagePlaceholder}><Text style={styles.imageText}>Accommodation</Text></View>
        <View style={styles.listingBody}>
          <Text style={styles.listingTitle}>Self-contained apartment</Text>
          <Text style={styles.meta}>Ojuelegba · 1.2 km from PPA</Text>
          <Text style={styles.price}>₦450,000 / year</Text>
          <Pressable style={styles.primaryButton} onPress={() => router.push('/accommodation-details')}>
            <Text style={styles.primaryButtonText}>View details</Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.secondaryButton} onPress={() => router.push('/accommodation')}>
        <Text style={styles.secondaryButtonText}>Browse all accommodation</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F7F9F7', flexGrow: 1, padding: 24, paddingTop: 64, paddingBottom: 40 },
  greeting: { color: '#536159', fontSize: 16, marginBottom: 5 },
  title: { color: '#122018', fontSize: 30, fontWeight: '800', marginBottom: 26 },
  locationCard: { backgroundColor: '#DDF3E5', borderRadius: 16, marginBottom: 30, padding: 20 },
  cardLabel: { color: '#167A3E', fontSize: 12, fontWeight: '800', letterSpacing: 0.8, marginBottom: 8 },
  location: { color: '#122018', fontSize: 21, fontWeight: '800', marginBottom: 5 },
  ppa: { color: '#536159', fontSize: 15 },
  sectionTitle: { color: '#122018', fontSize: 20, fontWeight: '800', marginBottom: 14 },
  listingCard: { backgroundColor: '#fff', borderColor: '#E1E8E3', borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  imagePlaceholder: { alignItems: 'center', backgroundColor: '#E8EFEA', height: 148, justifyContent: 'center' },
  imageText: { color: '#536159', fontWeight: '700' },
  listingBody: { padding: 18 },
  listingTitle: { color: '#122018', fontSize: 19, fontWeight: '800', marginBottom: 7 },
  meta: { color: '#536159', marginBottom: 9 },
  price: { color: '#122018', fontSize: 18, fontWeight: '800', marginBottom: 16 },
  primaryButton: { alignItems: 'center', backgroundColor: '#167A3E', borderRadius: 10, paddingVertical: 13 },
  primaryButtonText: { color: '#fff', fontWeight: '800' },
  secondaryButton: { alignItems: 'center', borderColor: '#167A3E', borderRadius: 10, borderWidth: 1, marginTop: 18, paddingVertical: 14 },
  secondaryButtonText: { color: '#167A3E', fontWeight: '800' },
});
