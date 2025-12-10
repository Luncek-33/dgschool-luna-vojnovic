import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { CartContext } from '../context/cartContext';   

const Item = ({ item, toggleFavorite }) => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);        

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Single", { item })}>
      <View style={styles.cardContainer}>

        <TouchableOpacity 
          style={styles.favoriteBtn} 
          onPress={() => toggleFavorite(item)}
        >
          <Text style={{ fontSize: 22 }}>
            {item.isFavorite ? "❤️" : "🤍"}
          </Text>
        </TouchableOpacity>

        <View>
          <Image style={styles.img} source={{ uri: item.image }} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.desc}>{item.description}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.price}>Stock: {item.stock}</Text>
            <Text style={styles.price}>Rating: {item.rating}</Text>
          </View>

          <TouchableOpacity 
            style={styles.cartBtn}
            onPress={() => addToCart(item)}
          >
            <Text style={{ color: "white" }}>Add to Cart</Text>
          </TouchableOpacity>

        </View>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer:{
    width: "100%",
    height: 170,
    flexDirection:"row",
    backgroundColor: "white",
    borderRadius:8,
    marginBottom:16,
    position: "relative"
  },
  img:{
    width: 100,
    height: "90%",
    resizeMode:"cover",
    borderRadius: 8,
    marginTop: 5,
  },
  textContainer:{
    paddingHorizontal:10,
    marginVertical:10,
    width: "70%",
  },
  name:{ fontWeight:"bold", fontSize:16 },
  category:{ fontSize:12, color:"#22D4FFFF" },
  desc:{ fontStyle:"italic" },
  price:{ 
    fontWeight:"bold",
    marginTop:5,
    backgroundColor:"#384053",
    color:"white",
    borderRadius: 100,
    paddingHorizontal:5,
    marginRight: 5,
  },
  priceContainer: { flexDirection:"row" },

  favoriteBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 20,
    padding: 5
  },

  cartBtn: {
    marginTop: 10,
    backgroundColor: "#1d1e29",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    width: 120
  }
});

export default Item;
