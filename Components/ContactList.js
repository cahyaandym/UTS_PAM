import React from 'react';
import { Text, View, FlatList } from 'react-native';
import KartuNama from './KartuNama';

const ContactList = ({ contacts }) => {
  const renderItem = ({ item: contact }) => (
    <KartuNama
      nama={contact?.name ?? ''}
      nomor={contact?.phoneNumbers?.[0]?.number ?? ''}
      key={contact?.id}
    />
  );

  return (
    <React.Fragment>
      {/* title */}
      <View
        style={{
          marginVertical: 15,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          CONTACT
        </Text>
      </View>
      {/* body */}
      <View
        style={{
          width: '100%',
          height: '100%',
          padding: 10,
        }}
      >
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={(contact) => contact.id}
        />
      </View>
    </React.Fragment>
  );
};

export default ContactList;
