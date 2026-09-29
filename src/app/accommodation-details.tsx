import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AccommodationDetailsScreen() {
  return <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.imagePlaceholder}><Text style={styles.imageText}>Self-contained apartment</Text></View>
    <Text style={styles.title}>Self-contained apartment</Text>
    <Text style={styles.location}>Ojuelegba, Surulere · 1.2 km from your PPA</Text>
    <Text style={styles.price}>₦450,000 / year</Text>
    <Text style={styles.sectionTitle}>About this place</Text>
    <Text style={styles.description}>A clean self-contained apartment in a secure compound, close to transport and everyday essentials.</Text>
    <View style={styles.features}><Text style={styles.feature}>Private bathroom</Text><Text style={styles.feature}>Water supply</Text><Text style={styles.feature}>Secure compound</Text></View>
    <Pressable style={styles.primaryButton} onPress={() => router.push('/report')}><Text style={styles.primaryButtonText}>Report this listing</Text></Pressable>
    <Pressable style={styles.secondaryButton} onPress={() => router.back()}><Text style={styles.secondaryButtonText}>Back to results</Text></Pressable>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F7F9F7', flexGrow: 1, padding: 24, paddingTop: 64, paddingBottom: 40 }, imagePlaceholder: { alignItems: 'center', backgroundColor: '#E8EFEA', borderRadius: 18, height: 210, justifyContent: 'center', marginBottom: 24 }, imageText: { color: '#536159', fontWeight: '800' }, title: { color: '#122018', fontSize: 29, fontWeight: '800', marginBottom: 8 }, location: { color: '#536159', fontSize: 16, lineHeight: 23, marginBottom: 14 }, price: { color: '#167A3E', fontSize: 22, fontWeight: '800', marginBottom: 28 }, sectionTitle: { color: '#122018', fontSize: 18, fontWeight: '800', marginBottom: 9 }, description: { color: '#536159', fontSize: 16, lineHeight: 24, marginBottom: 18 }, features: { gap: 9, marginBottom: 30 }, feature: { color: '#314137', fontSize: 15 }, primaryButton: { alignItems: 'center', backgroundColor: '#167A3E', borderRadius: 10, paddingVertical: 14 }, primaryButtonText: { color: '#fff', fontWeight: '800' }, secondaryButton: { alignItems: 'center', paddingVertical: 16 }, secondaryButtonText: { color: '#167A3E', fontWeight: '800' },
});
