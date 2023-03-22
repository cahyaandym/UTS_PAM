import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
  return (
    <React.Fragment>
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
          PROFILE
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 10,
            height: 100,
            margin: 10,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>
            Chaya Andy Mareza
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
              marginTop: 5,
            }}
          >
            (119140007)
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Profile;
