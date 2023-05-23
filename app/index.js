import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  const handleAddName = () => {
    if (name.trim() !== '') {
      const updatedList = [...namesList, name];
      const sortedList = updatedList.sort((a, b) => a.localeCompare(b));
      setNamesList(sortedList);
      setName('');
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter a name"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddName}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={namesList}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  form: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    paddingVertical: 5,
    fontSize: 16,
  },
});

export default App;
