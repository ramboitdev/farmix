import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const UserCard = ({ user }: { user: any }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{user.name}</Text>
    <Text style={styles.email}>{user.email}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 12, borderRadius: 8, backgroundColor: "#fff", marginBottom: 8 },
  name: { fontWeight: "600" },
  email: { color: "#666", marginTop: 4 }
});