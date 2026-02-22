import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import styles from "./style";

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.v1}>
            
            <TextInput
                style={styles.user}
                placeholder="User"
            />

            <TextInput
                style={styles.senha}
                placeholder='Password'
            />

        </View>
      <StatusBar style="auto" />
    </View>
  );
}

