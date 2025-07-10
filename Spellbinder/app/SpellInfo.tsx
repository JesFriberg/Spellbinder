import { View, Text, StyleSheet, Pressable, ScrollView, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import SpellData from "@/constants/spells.json";
import infoBackground from "@/assets/images/infoBackground.png";

function SpellInfo() {
  const params = useLocalSearchParams();

  const spellIndex = Number(params.id);

  const desc = Object.entries(SpellData[spellIndex].description);

  return (
    <View style={styles.container}>
      <ImageBackground source={infoBackground} style={styles.image} resizeMode="cover">
        <ScrollView style={{ flexDirection: "column" }} contentInset={{ bottom: 100 }}>
          <Text style={styles.header}>{SpellData[spellIndex].name}</Text>
          <Text style={{ ...styles.text, fontFamily: "OpenSans" }}>{SpellData[spellIndex].description.General}</Text>
          {desc.slice(1).map((element, index) => {
            return (
              <View style={{ flexDirection: "column", flex: 1 }} key={index}>
                <Text style={{ ...styles.text, fontWeight: 800 }}>
                  {element[0] + " "}
                  <Text
                    style={{
                      ...styles.text,
                      fontFamily: "OpenSans",
                      fontWeight: 400,
                    }}
                  >
                    {element[1]}
                  </Text>
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default SpellInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  text: {
    //color: "white",
    fontSize: 18,
    marginHorizontal: 25,
    paddingVertical: 10,
    textAlign: "left",
  },
  header: {
    //color: "white",
    fontSize: 42,
    fontWeight: 700,
    textAlign: "left",
    padding: 10,
    marginHorizontal: 15,
    //backgroundColor: "rgba(117,117,117,0.4)",
  },
  image: {
    alignSelf: "center",
  },
});
