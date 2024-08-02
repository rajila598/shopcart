import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
const screenHeight = Dimensions.get('window').height;
const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const searchRef = useRef();
  useEffect(() => {
    if (search !== '') {
      fetch(`https://dummyjson.com/products/search?q=${search}&limit=6`)
        .then(res => res.json())
        .then(response => {
          setData(response.products);
          setFilteredData(response.products);
        });
    } else {
      setData([]);
      setFilteredData([]);
    }
  }, [search]);
  const onSearch = (text) => {
    if (text) {
      const tempList = data.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(tempList);
    } else {
      setFilteredData(data);
    }
    setSearch(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        ref={searchRef}
        placeholder='Search'
        onChangeText={txt => onSearch(txt)}
        style={styles.searchInput}
      />
      <TouchableOpacity
        onPress={() => {
          searchRef.current.clear();
          setSearch('');
        }}
        style={styles.clearButton}
      >
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* <Image source={item.thumbnail} style={styles.image}/> */}
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EDED',
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: '#000'
  },
  clearButton: {
    backgroundColor: '#9395D3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    color: '#000'
  },
  image:{
    width: 100,
    height: 100,
  },
  itemText: {
    color: '#000',
  }
});