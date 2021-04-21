import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

import { Button } from "../comopents/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>:D</Text>

        <Text style={styles.title}>Prontinho!</Text>

        <Text style={styles.subTitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button 
            title='Começar'
            />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    paddingVertical: 10,
    color: colors.heading,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 40,
    marginTop:20
  },
});
