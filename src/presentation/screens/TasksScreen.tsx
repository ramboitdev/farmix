import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../theme/colors';
import { Card, Button } from 'react-native-paper';

const sample = [
  { id: '1', title: 'Préparer rapport' },
  { id: '2', title: 'Appeler fournisseur' },
  { id: '3', title: 'Mettre à jour dépenses' },
];

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={sample}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <Card.Title title={item.title} />
            <Card.Actions>
              <Button compact>Done</Button>
              <Button compact>Details</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: colors.background },
  card: { marginBottom: 10 }
});
