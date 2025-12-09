import React from 'react';
import { Text, View,Image, StyleSheet,TouchableOpacity } from 'react-native';

const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push("★");
    }

    if (halfStar) {
        stars.push("☆"); 
    }

    while (stars.length < 5) {
        stars.push("✩");
    }

    return (
        <View style={{ flexDirection: "row", marginTop: 8 }}>
            {stars.map((star, index) => (
                <Text key={index} style={{ fontSize: 22, color: "#f5c518", marginRight: 2 }}>
                    {star}
                </Text>
            ))}
        </View>
    );
};


const Single = ({
    navigation,
    route: {
        params: {item},
    },
}) => (
    <View style={styles.container}>
        <View style={styles.imgConteiner}>
            <Image style={styles.img} source={{uri: `${item.image}`}}/>
        </View>

        <View style={styles.cardHeader}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>{item.price}</Text>
        </View>

               {renderStars(Number(item.rating))}

        <Text style={styles.desc}>{item.description}</Text>

        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Go Back</Text>
        </TouchableOpacity>
    </View>
);


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:40
    },
    imgConteiner:{
        width:"90%",
        height:400,
        borderRadius:12,

    },
    img:{
        width:"100%",
        height:"100%",
        borderRadius:12,
        resizeMode:"cover"
    },
    cardHeader:{
        marginTop:15,
        width:"80%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    name:{
        fontSize:25,
        fontWeight:"bold",
        textTransform:"uppercase",
        color:"#070639"
    },
    desc:{
        width:"90%",
        marginTop:35,
        textAlign:"center"
    },
    btn:{
        backgroundColor:"#22D4FFFF",
        height:60,
        width:200,
        justifyContent:"center",
        marginTop:20,
        borderRadius:8
    },
    btnText:{
        color:"#fff",
        fontWeight:"bold",
        textAlign:"center"
    }


});

export default Single;
