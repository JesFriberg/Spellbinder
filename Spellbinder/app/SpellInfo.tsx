import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import SpellData from "@/constants/spells.json";

function SpellInfo() {
  const params = useLocalSearchParams();

  const spellIndex = Number(params.id);

  const desc = Object.entries(SpellData[spellIndex].description);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{SpellData[spellIndex].name}</Text>
      <ScrollView style={{ flexDirection: "column" }} contentInset={{ bottom: 100 }}>
        <Text style={styles.text}>{SpellData[spellIndex].description.General}</Text>
        {desc.slice(1).map((element, index) => {
          return (
            <View style={{ flexDirection: "column" }} key={index}>
              <Text style={{ ...styles.text, fontWeight: 800 }}>
                {element[0] + " "}
                <Text style={{ ...styles.text, fontWeight: 400 }}>{element[1]}</Text>
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default SpellInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 20,
    padding: 25,
    textAlign: "center",
  },
  header: {
    color: "white",
    fontSize: 42,
    fontWeight: 700,
    textAlign: "center",
    padding: 20,
  },
});
