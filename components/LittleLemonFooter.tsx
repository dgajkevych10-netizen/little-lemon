import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        © {year} Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#495E57',
    padding: 16,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});