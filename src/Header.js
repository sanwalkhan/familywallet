import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ handleMenuPress, handleProfilePress }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemPress = () => {
    setMenuOpen(false); // Close the menu when a menu item is pressed
    // Handle menu item press logic
  };

  const handleProfilePress = () => {
    Alert.alert('Profile', 'This is a profile pic');
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress}>
          <Icon name="bars" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfilePress}>
          <Icon name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Sliding Menu */}
      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={handleMenuItemPress}>
            <Icon name="home" size={24} color="black" />
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleMenuItemPress}>
            <Icon name="user" size={24} color="black" />
            <Text style={styles.menuItemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleMenuItemPress}>
            <Icon name="info-circle" size={24} color="black" />
            <Text style={styles.menuItemText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleMenuItemPress}>
            <Icon name="plus-circle" size={24} color="black" />
            <Text style={styles.menuItemText}>Add Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleMenuItemPress}>
            <Icon name="address-book" size={24} color="black" />
            <Text style={styles.menuItemText}>Contact List</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: 'white',
    padding: 16,
    zIndex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuItemText: {
    marginLeft: 8,
  },
});

export default Header;
