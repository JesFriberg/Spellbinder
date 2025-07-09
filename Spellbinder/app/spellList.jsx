import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import SpellContainer from "@/components/containers/spellContainer";
import spellData from "@/constants/spells.json";

const spellList = () => {
  const [data, setData] = useState(1);
  const [fetch, setFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Spells</Text>
      <ScrollView style={styles.spellListContainer}>
        {spellData.map((spell, index) => {
          return <SpellContainer data={spell} number={index} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default spellList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: "7%",
    // backgroundColor: "blue",
  },
  spellListContainer: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "7%",
    flexDirection: "column",
    // backgroundColor: "red",
  },
  fetchText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  headerText: {
    color: "white",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
  },
});
