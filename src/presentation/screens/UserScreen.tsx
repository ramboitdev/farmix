import React, { useEffect, useState } from "react";
import { View, Button, FlatList, Text, StyleSheet } from "react-native";
// import { createContainer } from "@/app/di/container";

export const UserScreen = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [vm, setVm] = useState<any>(null);

  /*useEffect(() => {
    let sub: any;
    (async () => {
      const { userVM } = await createContainer();
      setVm(userVM);
      sub = userVM.users$.subscribe(setUsers);
    })();
    return () => sub && sub.unsubscribe();
  }, []);
*/
  return (
    <View style={styles.container}>
      <Button
        title="Add User"
        onPress={() => vm?.addUser("Alice", "alice@mail.com")}
        disabled={!vm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  item: { padding: 8, fontSize: 16 }
});