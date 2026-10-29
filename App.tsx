import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ScrollView } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import { WelcomeScreen } from './components/WelcomeScreen';
export default function App() {
return (
<SafeAreaProvider>
<SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
<LittleLemonHeader/>
<ScrollView
style={styles.scroll}
contentContainerStyle={styles.scrollContent}
indicatorStyle="white"
>
<WelcomeScreen />
</ScrollView>
<LittleLemonFooter/>
</SafeAreaView>
</SafeAreaProvider>
);
}
const styles = StyleSheet.create({
screen: { flex: 1, backgroundColor: '#495E57' },
container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 24,
  },
});