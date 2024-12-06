import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const NotificationsScreen = () => {
  // Datos simulados de notificaciones
  const notifications = [
    { id: "1", message: "Has recibido $100", date: "2024-12-01" },
    { id: "2", message: "Retiro de $50", date: "2024-12-02" },
    { id: "3", message: "Pago de $200 realizado", date: "2024-12-03" },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  notificationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  notificationMessage: {
    fontSize: 16,
    color: "#333",
  },
  notificationDate: {
    fontSize: 14,
    color: "#888",
  },
});

export default NotificationsScreen;
