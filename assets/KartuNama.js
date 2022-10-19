import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import * as Linking from 'expo-linking';

const KartuNama = ({ nama, nomor }) => {
  return (
    <TouchableOpacity
      onPress={async () => Linking.openURL(`tel:${nomor}`)}
    >
      <View
        style={{
          margin: 5,
          padding: 10,
          // flex: 1,
          backgroundColor: "#E2E2E2",
          height: 100,
          width: "100%",
          shadowColor: "#000",
          shadowOffset: {
            height: 2,
            width: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {nama}
        </Text>
        <View style={{ height: 5 }} />
        <Text
          style={{
            fontSize: 18,
            color: "#444",
          }}
        >
          {nomor}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default KartuNama;
