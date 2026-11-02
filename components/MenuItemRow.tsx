import { StyleSheet, Text, View } from 'react-native';
import type { MenuItem } from '../types/menu';

type MenuItemRowProps = {
  item: MenuItem;
};

export default function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>
        {item.price.toFixed(2)} грн
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 12,
    backgroundColor:"#e1e6e3",
    marginBottom:10,
    padding:4,
  },
  name: {
    flex: 1,
    color: '#333333',
    fontSize: 16,
  },
  price: {
    color: '#c90d07',
    fontSize: 15,
    fontWeight: 'bold',
  },
});