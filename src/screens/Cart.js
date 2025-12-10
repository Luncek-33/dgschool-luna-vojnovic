import React, { useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../context/cartContext";

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cart.length === 0 && <Text>Your cart is empty.</Text>}

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Image source={{ uri: item.image }} style={styles.img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>

            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text style={{ color: "red" }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ padding: 20 },
  title:{ fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  itemRow:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:15
  },
  img:{ width: 70, height:70, borderRadius:8, marginRight:10 },
  name:{ fontWeight:"bold" }
});

export default CartScreen;
