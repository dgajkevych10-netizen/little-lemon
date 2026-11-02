import { FlatList,StyleSheet,Text,View} from "react-native";
import type {MenuItem} from "../types/menu";
import { menuItems } from "../data/menu";
import MenuItemRow from "../components/MenuItemRow";
function MenuFlatScreen (){
    return (<View style={styles.list}>
      <FlatList<MenuItem>
        style={styles.list}
        contentContainerStyle={styles.content}
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemRow item={item} />}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.title}>Наше меню</Text>
          </View>
        }
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Страв не знайдено.
          </Text>
        }
      /></View>)
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 11,
    marginBottom: 8,
    fontSize: 16,
  },
  list: {
    flex: 1,
     backgroundColor: '#FFFFFF',
     padding:10
  },
  content: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  listHeader: {
    paddingVertical: 12,
    alignItems:"center"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#495E57',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  empty: {
    textAlign: 'center',
    paddingVertical: 30,
    color: '#666666',
    fontSize: 16,
  },
  input:{
    borderColor:"#333",
    padding:10,
    backgroundColor:"#c0c0c0"
  }
});
export default MenuFlatScreen;