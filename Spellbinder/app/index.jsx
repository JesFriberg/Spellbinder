import { View, Text, StyleSheet, Image } from "react-native";
import spellbinderLogo from "@/assets/images/Spellbinder_logo.png";
import React from "react";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <Image source={spellbinderLogo} style={styles.image} resizeMode="contain"></Image>
      <Text style={styles.text}>Lorem ipsum</Text>
      <Link href="/explore" style={styles.linkText}>
        Explore
      </Link>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: "40%",
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 100,
  },
  image: {
    maxWidth: "95%",
    maxHeight: "25%",
    // backgroundColor: "rgba(255,255,255,0.5)",
    alignSelf: "center",
  },
  linkText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
