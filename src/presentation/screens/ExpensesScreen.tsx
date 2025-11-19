import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../theme/colors';
import { Card } from 'react-native-paper';

const data = [
  { id: '1', label: 'Achats semences', amount: 120000 },
  { id: '2', label: 'Transport', amount: 45000 },
  { id: '3', label: 'Main d'œuvre', amount: 80000 },
];

export default function ExpensesScreen() {
  const total = data.reduce((s, x) => s + x.amount, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total: {total} Ariary</Text>
      <FlatList
        data={data}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <Card.Title title={item.label} subtitle={`${item.amount} Ariary`} />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: colors.background },
  total: { fontWeight: '700', fontSize: 18, color: colors.primary, marginBottom: 12 },
  card: { marginBottom: 10 }
});
