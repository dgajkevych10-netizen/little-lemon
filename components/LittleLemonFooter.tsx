import { View, Text, StyleSheet } from 'react-native';
import {Palette} from "../theme/palette";
type FooterProps = {
  colors:Palette,
}
export default function LittleLemonFooter({colors}:FooterProps) {
  const year = new Date().getFullYear();

  return (
   <View style={[styles.footer,{backgroundColor:colors.surface}]}>
          <Text style={[styles.text,{color:colors.text}]}>© {year} Little Lemon.</Text>
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