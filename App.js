import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Best Fit</Text>
      <Text style={styles.box}>1.0.0</Text>
      <Text>Start</Text>
      <Text>Design</Text>
      <Text>Help</Text>
      <Text>Settings</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 18,
  },
  largeText: {
    fontSize: 24,
  },
  box: {
    paddingBottom: 100,
    margin: 10,
  }
});
