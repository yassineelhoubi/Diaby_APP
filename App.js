import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { useCachedResources } from './src/hooks/useCachedResources';
import { StyleSheet, StatusBar } from 'react-native'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'black',
      flex: 1
  }
});
