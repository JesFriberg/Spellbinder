import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Link } from "expo-router";

const SpellContainer = (props) => {
  return (
    <View style={styles.container}>
      <Link
        href={{ pathname: "/SpellInfo", params: { id: props.number } }}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={styles.text}>{props.data.name}</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default SpellContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
  },
});
