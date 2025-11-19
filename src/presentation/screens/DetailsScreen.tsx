import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails</Text>
      <Text>Contenu de la page de détails...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor: colors.background, padding:16 },
  title: { fontSize:20, fontWeight:'700', color: colors.primary }
});
