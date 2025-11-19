import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import colors from '../theme/colors';
import { LineChart } from 'react-native-chart-kit';
import { Card } from 'react-native-paper';
import SvgUri from 'react-native-svg-uri'; // placeholder; expo may need react-native-svg

export default function HomeScreen() {
  const screenWidth = Dimensions.get('window').width - 32;

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ data: [500, 700, 400, 900, 700, 1000] }]
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Famix-mob</Text>
        <Text style={styles.subtitle}>Dashboard — Aperçu des dépenses & tâches</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Dépenses (6 mois)</Text>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={{
              backgroundGradientFrom: colors.background,
              backgroundGradientTo: colors.background,
              color: (opacity = 1) => `rgba(1,56,130, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            }}
            bezier
            style={{ borderRadius: 12 }}
          />
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Tâches à faire</Text>
          <Text>- Préparer rapport financier</Text>
          <Text>- Vérifier inventaire</Text>
          <Text>- Planifier réunion</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  header: { marginBottom: 12 },
  title: { color: colors.primary, fontSize: 26, fontWeight: '700' },
  subtitle: { color: '#444', marginTop: 4 },
  card: { marginTop: 12, borderRadius: 12, overflow: 'hidden' },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 }
});
