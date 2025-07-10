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
          {/*Spell name*/}
          <Text style={styles.header}>{SpellData[spellIndex].name}</Text>
          {/*Spell level, spell school, classes that can cast*/}
          <Text style={styles.schoolText}>
            {"Level " +
              SpellData[spellIndex].level +
              " " +
              SpellData[spellIndex].school +
              " \n" +
              SpellData[spellIndex].classes.join(", ")}
          </Text>
          {/*Spell casting time*/}
          <Text style={{ ...styles.infoText, paddingTop: 10, fontWeight: 800 }}>
            Casting Time:
            <Text style={{ ...styles.infoText, fontFamily: "OpenSans" }}>
              {" " + SpellData[spellIndex].casting_time}
            </Text>
          </Text>
          {/*Spell range*/}
          <Text style={{ ...styles.infoText, fontWeight: 800 }}>
            Range:
            <Text style={{ ...styles.infoText, fontFamily: "OpenSans" }}>{" " + SpellData[spellIndex].range}</Text>
          </Text>
          {/*Spell components*/}
          <Text style={{ ...styles.infoText, fontWeight: 800 }}>
            Components:
            <Text style={{ ...styles.infoText, fontFamily: "OpenSans" }}>
              {" " + SpellData[spellIndex].components.join(", ")}
            </Text>
          </Text>
          {/*Spell duration*/}
          <Text style={{ ...styles.infoText, fontWeight: 800 }}>
            Duration:
            <Text style={{ ...styles.infoText, fontFamily: "OpenSans" }}>{" " + SpellData[spellIndex].duration}</Text>
          </Text>
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
  infoText: {
    //color: "white",
    fontSize: 18,
    marginHorizontal: 25,
    paddingVertical: 2,
    textAlign: "left",
  },
  schoolText: {
    fontSize: 18,
    marginHorizontal: 25,
    textAlign: "left",
    fontStyle: "italic",
  },
  header: {
    //color: "white",
    fontSize: 42,
    fontWeight: 700,
    textAlign: "left",
    paddingHorizontal: 10,
    paddingTop: 10,
    marginHorizontal: 15,
    //backgroundColor: "rgba(117,117,117,0.4)",
  },
  image: {
    alignSelf: "center",
  },
});
