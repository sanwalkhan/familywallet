import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleAddContact = () => {
    if (name.trim() === "" && phoneNumber.trim() === "") {
      Alert.alert("Error", "Please enter a name and phone number");
    } else if (name.trim() === "") {
      Alert.alert("Error", "Please enter a name");
    } else if (phoneNumber.trim() === "") {
      Alert.alert("Error", "Please enter a phone number");
    } else {
      const newContact = {
        name: name.trim(),
        phoneNumber: phoneNumber.trim(),
      };
      const updatedContacts = [...contacts, newContact].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setContacts(updatedContacts);
      setName("");
      setPhoneNumber("");
    }
  };
  
  const handleEditContact = (index) => {
   alert("heelo")
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter name"
        />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="Enter phone number"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={contacts}
        renderItem={({ item, index }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhoneNumber}>{item.phoneNumber}</Text>
            <TouchableOpacity onPress={() => handleEditContact(index)}>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  contactItem: {
    flexDirection: "row",
    marginBottom: 10,
  },
  contactName: {
    flex: 1,
    marginRight: 10,
    fontWeight: "bold",
  },
  contactPhoneNumber: {
    flex: 1,
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default HomeScreen;
