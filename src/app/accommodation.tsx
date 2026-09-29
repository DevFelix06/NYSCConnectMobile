import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const listings = [
  { id: '1', title: 'Self-contained apartment', location: 'Ojuelegba, Surulere', distance: 1.2, price: 450000 },
  { id: '2', title: 'Mini flat', location: 'Lawanson, Surulere', distance: 2, price: 600000 },
  { id: '3', title: 'Single room', location: 'Itire, Surulere', distance: 3.1, price: 300000 },
];

export default function AccommodationScreen() {
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [maxDistance, setMaxDistance] = useState(10);
  const filteredListings = useMemo(
    () => listings.filter((listing) => listing.price <= maxPrice && listing.distance <= maxDistance),
    [maxDistance, maxPrice],
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Accommodation</Text>
      <Text style={styles.subtitle}>Places near your PPA in Surulere.</Text>
      <FilterGroup label="Maximum price" options={[[300000, '₦300k'], [500000, '₦500k'], [1000000, 'Any price']]} selected={maxPrice} onSelect={setMaxPrice} />
      <FilterGroup label="Maximum distance" options={[[1.5, '1.5 km'], [2, '2 km'], [10, 'Any distance']]} selected={maxDistance} onSelect={setMaxDistance} />
      <Text style={styles.results}>{filteredListings.length} place{filteredListings.length === 1 ? '' : 's'} found</Text>
      {filteredListings.map((listing) => (
        <View key={listing.id} style={styles.card}>
          <View style={styles.imagePlaceholder}><Text style={styles.imageText}>Accommodation</Text></View>
          <View style={styles.cardBody}>
            <Text style={styles.listingTitle}>{listing.title}</Text>
            <Text style={styles.meta}>{listing.location} · {listing.distance} km from PPA</Text>
            <Text style={styles.price}>₦{listing.price.toLocaleString()} / year</Text>
            <Pressable style={styles.button} onPress={() => router.push('/accommodation-details')}><Text style={styles.buttonText}>View details</Text></Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function FilterGroup({ label, options, selected, onSelect }: { label: string; options: [number, string][]; selected: number; onSelect: (value: number) => void }) {
  return <View><Text style={styles.filterLabel}>{label}</Text><View style={styles.filterRow}>{options.map(([value, text]) => <Pressable key={value} onPress={() => onSelect(value)} style={[styles.chip, selected === value && styles.chipSelected]}><Text style={[styles.chipText, selected === value && styles.chipTextSelected]}>{text}</Text></Pressable>)}</View></View>;
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F7F9F7', flexGrow: 1, padding: 24, paddingTop: 64, paddingBottom: 40 },
  title: { color: '#122018', fontSize: 30, fontWeight: '800', marginBottom: 7 }, subtitle: { color: '#536159', fontSize: 16, marginBottom: 28 },
  filterLabel: { color: '#122018', fontSize: 16, fontWeight: '800', marginBottom: 10 }, filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 9, marginBottom: 22 },
  chip: { borderColor: '#C8D5CC', borderRadius: 20, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 10 }, chipSelected: { backgroundColor: '#167A3E', borderColor: '#167A3E' }, chipText: { color: '#314137', fontWeight: '700' }, chipTextSelected: { color: '#fff' },
  results: { color: '#536159', fontWeight: '700', marginBottom: 14 }, card: { backgroundColor: '#fff', borderColor: '#E1E8E3', borderRadius: 16, borderWidth: 1, marginBottom: 16, overflow: 'hidden' }, imagePlaceholder: { alignItems: 'center', backgroundColor: '#E8EFEA', height: 124, justifyContent: 'center' }, imageText: { color: '#536159', fontWeight: '700' }, cardBody: { padding: 17 }, listingTitle: { color: '#122018', fontSize: 19, fontWeight: '800', marginBottom: 7 }, meta: { color: '#536159', lineHeight: 20, marginBottom: 9 }, price: { color: '#122018', fontSize: 17, fontWeight: '800', marginBottom: 14 }, button: { alignItems: 'center', backgroundColor: '#167A3E', borderRadius: 10, paddingVertical: 12 }, buttonText: { color: '#fff', fontWeight: '800' },
});
