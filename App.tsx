import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FooterComponent from './Components/FooterComponent';
import NavBarComponent from './Components/NavBarComponent';
import PostComponent from './Components/PostComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBarComponent/>
      <PostComponent/>
      <FooterComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
