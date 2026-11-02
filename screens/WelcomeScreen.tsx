import { Text, View,StyleSheet,TextInput, Pressable,Image,useWindowDimensions,ActivityIndicator} from 'react-native';
import type { Palette } from "../theme/palette";
type WelcomeScreenProps = {
colors: Palette;
email: string;
onExit: () => void;
};
export default function WelcomeScreen({colors,email,onExit}:WelcomeScreenProps) {
    const { width, height, scale, fontScale } = useWindowDimensions();
const wide = width >= 600;
  return (
   <View style={[styles.container,{flexDirection: wide ? 'row' : 'column'},{backgroundColor:colors.background}]}>
    <Image
    source={require('../assets/android-icon-foreground.png')}
style={styles.logo}
resizeMode="contain"
accessible={true}
accessibilityLabel="Логотип Little Lemon"
    />
        <Text style={[styles.paragraph,{color:colors.text}]}>Навчальний
екран привітання для {email}</Text>
<Pressable
onPress={onExit}
style={[styles.btn,{backgroundColor:colors.accent}]}
>
    <Text style={[styles.paragraph,{color:colors.onAccent}]}>Повернутися до форми</Text>
</Pressable>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#495E57',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#495E57',
    marginTop: 22,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333333',
    marginBottom: 16,
  },
   logo:{
        width:120,
        height:140,
        alignSelf:"center",
        marginBottom:16,
    },
  btn:{
    marginTop:10,
    padding:10,
    alignItems:"center",
    borderRadius:12
  }
});
