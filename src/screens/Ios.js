import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import data from "../data/products.json";
import Item from "../components/item";

class Ios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      favorites: [], 
    };
  }

  componentDidMount() {
    this.setState({
      products: data,
    });
  }

  addToFavorites = (item) => {
    this.setState((prevState) => {
      if (prevState.favorites.find(fav => fav.id === item.id)) return prevState;
      return { favorites: [...prevState.favorites, item] };
    });
  };


  sortHighestRating = () => {
    const productsObj = this.state.products || {};
    const arr = Array.isArray(productsObj.ios) ? [...productsObj.ios] : [];
    const sorted = arr.sort((a, b) => b.rating - a.rating);
    this.setState({ products: { ...productsObj, ios: sorted } });
  };

  sortLowestRating = () => {
    const productsObj = this.state.products || {};
    const arr = Array.isArray(productsObj.ios) ? [...productsObj.ios] : [];
    const sorted = arr.sort((a, b) => a.rating - b.rating);
    this.setState({ products: { ...productsObj, ios: sorted } });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.desc}>IOS Products</Text>

         
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
            <Button title="Highest Rating" onPress={this.sortHighestRating} />
            <Button title="Lowest Rating" onPress={this.sortLowestRating} />
          </View>

          <FlatList
            data={this.state.products.ios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemWrapper}>
                <Item item={item} />
                <Button 
                  title="Favourite"
                  onPress={() => this.addToFavorites(item)}
                />
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Favorites", { favorites: this.state.favorites })}
          >
            <Text style={styles.btnText}>View Favorites</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    alignSelf:"center",
    padding:20
  },
  desc: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  itemWrapper: {
    marginBottom: 15
  },
  btn: {
    backgroundColor: "#1d1e29",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center"
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default Ios;
