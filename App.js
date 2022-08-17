import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: 'rgba(255, 148, 0, 1)',
    width: 428,
    height: 442,
    left: 0,
    top: 0,
  },
  title: {
    position: "relative",
    top: 80,
    textAlign: "center",
    fontSize: 36,

  }
});
