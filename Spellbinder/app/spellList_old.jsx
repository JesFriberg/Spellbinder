import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const spellList = () => {
  const [data, setData] = useState(1);
  const [fetch, setFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const url = "https://www.dnd5eapi.co/api/2014/spells/?name=Acid+Arrow";

    const fetchSpell = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(url, { signal: abortController.signal });

        if (response.status === 200) {
          console.log(response.data);

          setData(response.data);

          setIsLoading(false);
          return;
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log("Data fetch aborted");
        } else {
          setErrorFlag(true);
          setIsLoading(false);
        }
      }
    };
    fetchSpell();
    return () => abortController.abort("Data fetching cancelled");
  }, [fetch]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Spell List</Text> */}
      <Pressable
        style={styles.button}
        onPress={() => {
          setFetch(fetch ? false : true);
          console.log("Fetching...");
        }}
      >
        <Text style={styles.fetchText}>Fetch Spell</Text>
      </Pressable>
      <Text style={styles.text}>{data !== 1 ? data.results[0].index : ""}</Text>
    </View>
  );
};

export default spellList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: "7%",
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
