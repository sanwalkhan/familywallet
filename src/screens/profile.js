import React from "react";
import { View, Text, Button } from "react-native";

const Profile = ({navigation}) => {
  const onGoPress = () => {
   navigation.navigate('Home')
  };

  return (
    <View>

      <Text>
      Profile</Text>
      <View>
      <Button title="Go" onPress={onGoPress} />
    </View>
      </View>
    
  );
};

export default Profile;
