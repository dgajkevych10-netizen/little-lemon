import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Little Lemon</Text>
      <Text style={styles.subtitle}>
        Mediterranean Restaurant
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#495E57',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#F4CE14',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 6,
  },
});