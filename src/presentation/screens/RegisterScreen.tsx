import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import colors from '../theme/colors';

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Title style={{color: colors.primary}}>Créer un compte</Title>
      <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput label="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button mode="contained" onPress={register} style={styles.button}>S'inscrire</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20, backgroundColor: colors.background },
  input: { marginBottom:12 },
  button: { marginTop:8, backgroundColor: colors.primary }
});
