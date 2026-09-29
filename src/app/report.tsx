import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const reasons = ['Outdated information', 'Wrong price', 'Wrong location', 'Listing does not exist', 'Suspicious or inaccurate information'];

export default function ReportScreen() {
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const submitReport = () => { Alert.alert('Report submitted', 'Thank you. We will review this listing.', [{ text: 'Done', onPress: () => router.replace('/accommodation') }]); };
  return <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Report listing</Text><Text style={styles.subtitle}>Tell us what is wrong with this accommodation listing.</Text>
    <Text style={styles.sectionTitle}>Select a reason</Text>
    {reasons.map((item) => <Pressable key={item} onPress={() => setReason(item)} style={[styles.reason, reason === item && styles.reasonSelected]}><Text style={[styles.reasonText, reason === item && styles.reasonTextSelected]}>{item}</Text></Pressable>)}
    <Text style={styles.sectionTitle}>Additional details (optional)</Text>
    <TextInput style={styles.input} multiline placeholder="Tell us more..." placeholderTextColor="#7A857E" value={details} onChangeText={setDetails} />
    <Pressable disabled={!reason} onPress={submitReport} style={[styles.submit, !reason && styles.submitDisabled]}><Text style={styles.submitText}>Submit report</Text></Pressable>
  </ScrollView>;
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F7F9F7', flexGrow: 1, padding: 24, paddingTop: 64, paddingBottom: 40 }, title: { color: '#122018', fontSize: 30, fontWeight: '800', marginBottom: 8 }, subtitle: { color: '#536159', fontSize: 16, lineHeight: 23, marginBottom: 28 }, sectionTitle: { color: '#122018', fontSize: 16, fontWeight: '800', marginBottom: 11 }, reason: { backgroundColor: '#fff', borderColor: '#D9E3DC', borderRadius: 11, borderWidth: 1, marginBottom: 10, padding: 15 }, reasonSelected: { backgroundColor: '#DDF3E5', borderColor: '#167A3E' }, reasonText: { color: '#314137' }, reasonTextSelected: { color: '#0B5828', fontWeight: '800' }, input: { backgroundColor: '#fff', borderColor: '#D9E3DC', borderRadius: 11, borderWidth: 1, minHeight: 110, padding: 14, textAlignVertical: 'top' }, submit: { alignItems: 'center', backgroundColor: '#167A3E', borderRadius: 10, marginTop: 22, paddingVertical: 15 }, submitDisabled: { opacity: 0.45 }, submitText: { color: '#fff', fontWeight: '800' },
});
