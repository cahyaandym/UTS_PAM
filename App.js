import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import KartuNama from "./assets/KartuNama";
import * as Contacts from "expo-contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    switch (status) {
      case "granted":
        const { data: contacts } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });

        if (contacts.length === 0) break;

        setContacts(contacts);
        break;

      default:
        break;
    }
  };

  const renderItem = ({ item: contact }) => (
    <KartuNama
      nama={contact?.name ?? ""}
      nomor={contact?.phoneNumbers?.[0]?.number ?? ""}
      key={contact?.id}
    />
  );

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          flex: 1,
          alignItems: "center",
          padding: 10,
          backgroundColor: "#215486",
        }}
      >
        {/* title */}
        <View
          style={{
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            CONTACT
          </Text>
        </View>
        {/* body */}
        <View
          style={{
            padding: 10,
            width: "100%",
            height: "100%",
          }}
        >
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={(contact) => contact.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
