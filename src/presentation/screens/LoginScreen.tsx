import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import colors from '../theme/colors';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // placeholder auth: go to Main
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Title style={{color: colors.primary}}>Bienvenue sur Famix-mob</Title>
      <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput label="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button mode="contained" onPress={login} style={styles.button}>Se connecter</Button>
      <Button onPress={() => navigation.navigate('Register')}>Créer un compte</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20, backgroundColor: colors.background },
  input: { marginBottom:12 },
  button: { marginTop:8, backgroundColor: colors.primary }
});
