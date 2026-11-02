import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet,View,useColorScheme} from 'react-native';
import { useState } from 'react';
import  LittleLemonHeader  from './components/LittleLemonHeader';
import LittleLemonFooter  from './components/LittleLemonFooter';
import MenuFlatScreen from './screens/MenuFlatScreen';
import MenuGroupedScreen from './screens/MenuGropedScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import { lightColors,darkColors } from './theme/palette';
export default function App() {
  const ActiveScreen = MenuGroupedScreen;
  const colorScheme = useColorScheme();
const isDark = colorScheme === 'dark';
const colors = isDark ? darkColors : lightColors;
  const [demoEmail, setDemoEmail] = useState<string | null>(null);
  return (
    <SafeAreaProvider>
    <SafeAreaView style={[styles.container,{backgroundColor:colors.background}]} edges={['top', 'bottom']}>
        <LittleLemonHeader colors={colors} />
      <View style={styles.content}>
        {demoEmail === null ? 
           (<LoginScreen colors={colors} onContinue={setDemoEmail} />) : 
           (<WelcomeScreen colors={colors} email={demoEmail} onExit={() => setDemoEmail(null)}/>)
        }
      </View>
        <LittleLemonFooter colors={colors}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  content:{
    flex:1
  },
  text: {
    color: '#333333',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
  scrollContent: {
    paddingBottom: 20,
  }
});
