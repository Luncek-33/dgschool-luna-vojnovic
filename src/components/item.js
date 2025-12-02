import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

const Item = ({item}) => (
    <View style={styles.cardContainer}>
        <View>
            <Image style={styles.img} source={{uri: `${item.image}`}}  />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.price}>Previous Price: {item.previousPrice}</Text>
            <Text style={styles.price}>Rating: {item.rating}</Text>
            </View>
        </View>
    </View>
);
const styles = StyleSheet.create({
    cardContainer:{
        width: "100%",
        height: 130,
        flexDirection:"row",
        backgroundColor: "white",
        borderRadius:8,
        marginBottom:16,
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
    name:{
        fontWeight:"bold",
        fontSize:16
    },
    category:{
        fontSize:12,
        color:"#22D4FFFF"
    },
    desc:{
        fontStyle:"italic"
    },
    price:{
        fontWeight:"bold",
        marginTop:5,
        backgroundColor:"#384053",
        color:"white",
        borderRadius: 100,
        paddingHorizontal:5,
        width: "auto",
        marginRight: 5,
    },
    priceContainer: {
        flexDirection:"row",
        
    }
});

export default Item;
