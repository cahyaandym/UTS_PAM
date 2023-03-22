import { View, StatusBar, Platform, SafeAreaView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Contacts from 'expo-contacts';
import ContactList from './Components/ContactList';
import Profile from './Components/Profile';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isContact, setIsContact] = useState(true);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    switch (status) {
      case 'granted':
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
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#215486',
        }}
      >
        {isContact ? <ContactList contacts={contacts} /> : <Profile />}
        <View
          style={{
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 5,
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Button
              title="Contact"
              onPress={() => setIsContact(true)}
              disabled={isContact}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Button
              title="Profile"
              onPress={() => setIsContact(false)}
              disabled={!isContact}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
