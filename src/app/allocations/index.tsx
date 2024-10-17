import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';


export default function HomeScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Allocations' }} />

      <Text>Allocations</Text>

      <Link href="/allocations/new">New Allocation</Link>

      <StatusBar style="auto" />
    </View>
  );
}
