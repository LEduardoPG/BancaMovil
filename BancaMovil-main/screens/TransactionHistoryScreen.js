import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const TransactionHistoryScreen = () => {
  // Datos simulados de transacciones
  const transactions = [
    { id: "1", type: "Depósito", amount: 100, date: "2024-12-01" },
    { id: "2", type: "Retiro", amount: 50, date: "2024-12-02" },
    { id: "3", type: "Pago", amount: 200, date: "2024-12-03" },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionType}>{item.type}</Text>
      <Text style={styles.transactionAmount}>${item.amount}</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Transacciones</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
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
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionAmount: {
    fontSize: 16,
    color: "#2E8B57",
  },
  transactionDate: {
    fontSize: 14,
    color: "#888",
  },
});

export default TransactionHistoryScreen;
