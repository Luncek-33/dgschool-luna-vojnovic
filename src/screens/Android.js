import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
  Switch,
} from "react-native";
import data from "../data/products.json";
import Item from "../components/item";
import { CartContext } from "../context/cartContext"; 

class Android extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showInStockOnly: false,
    };
  }

  componentDidMount() {
    this.setState({
      products: data,
    });
  }

  render() {
    const filterProducts = this.state.showInStockOnly
      ? this.state.products.android.filter((p) => p.stock === "Yes")
      : this.state.products.android;

    return (
      <CartContext.Consumer>
        {({ addToCart }) => (
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.filterText}>Show in-stock only</Text>
              <Switch
                value={this.state.showInStockOnly}
                onValueChange={(value) =>
                  this.setState({ showInStockOnly: value })
                }
              />

              <Text style={styles.desc}>Android Products</Text>

              <FlatList
                data={filterProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View>
                    <Item item={item} />
                    <Button
                      title="Add to Cart"
                      onPress={() => addToCart(item)}
                    />
                  </View>
                )}
              />

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>View More</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </CartContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignSelf: "center",
    padding: 20,
  },
  desc: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#1d1e29",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  filterText: {
    fontSize: 16,
  },
});

export default Android;
