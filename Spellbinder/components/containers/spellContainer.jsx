import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

const SpellContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

export default SpellContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  fetchText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});
