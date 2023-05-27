import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Profile = ({ navigation }) => {

  const handleAddContactPress = () => {
    navigation.navigate('Home');// Navigate to the Add Contact form screen
  };

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={handleAddContactPress}>
        <Text style={styles.cardText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
