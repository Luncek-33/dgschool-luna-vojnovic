/*import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                autoplay={true}
                activeDotColor="#22D4FFFF"
                autoplayTimeout={5}
                >
                    <View style={styles.item}>
                        <Image 
                        style={styles.imgItem}
                        source={require("../../assets/sample1.jpg")}
                        resizeMode="cover"
                        />
                    </View>
                      <View style={styles.item}>
                        <Image 
                        style={styles.imgItem}
                        source={require("../../assets/sample2.jpg")}
                        resizeMode="cover"
                        />
                    </View>
                      <View style={styles.item}>
                        <Image 
                        style={styles.imgItem}
                        source={require("../../assets/sample3.jpg")}
                        resizeMode="cover"
                        />
                    </View>
                      <View style={styles.item}>
                        <Image 
                        style={styles.imgItem}
                        source={require("../../assets/sample4.jpg")}
                        resizeMode="cover"
                        />
                    </View>
                      <View style={styles.item}>
                        <Image 
                        style={styles.imgItem}
                        source={require("../../assets/sample5.jpg")}
                        resizeMode="cover"
                        />
                    </View>
                </Swiper>

                
            </View>
            <View style={styles.sliderContainer}>
               <Swiper
                autoplay={true}
                activeDotColor="#ff2222ff"
                autoplayTimeout={3}
                >
                    <View style={styles.slide1}>
                        <Text>Slide 1</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text>Slide 2</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text>Slide 3</Text>
                    </View>  
                </Swiper>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        
    },
   sliderContainer:{
    width:"90%",
    height:200,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    borderRadius:8,
   },
   item:{
    flex:1,
    justifyContent:"center",
    borderRadius:8
   },
   imgItem:{
    width:"100%",
    height:"100%"
   },
   slide1:{
    backgroundColor:"#fffb00ff",
    justifyContent:"center",
    alignItems:"center",
    width:"90%",
    height:200,
    marginTop:10,
    borderRadius:8,
   },
    slide2:{
    backgroundColor:"#ff00d4ff",
    justifyContent:"center",
    alignItems:"center",
    width:"90%",
    height:200,
    marginTop:10,
    borderRadius:8,
   },
    slide3:{
    backgroundColor:"#33ff00ff",
    justifyContent:"center",
    alignItems:"center",
    width:"90%",
    height:200,
    marginTop:10,
    borderRadius:8,
   }
});

export default Home;*/

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      currentIndex: 1,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://691ccee63aaeed735c9232a0.mockapi.io/api/images/images");
    const jsonData = await data.json();
    this.setState({ images: jsonData });
  }

  render() {
    const { images, currentIndex } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          {images.length > 0 && (
            <>
              <Swiper
                autoplay={true}
                activeDotColor="#22D4FFFF"
                autoplayTimeout={5}
                onIndexChanged={(index) => this.setState({ currentIndex: index + 1 })}
              >
                {images.map((item, i) => (
                  <View style={styles.item} key={i}>
                    <Image style={styles.imgItem} source={{ uri: item.uri }} resizeMode="cover" />
                  </View>
                ))}
              </Swiper>
              <View style={styles.pagination}>
                <Text style={styles.paginationText}>
                  {currentIndex} / {images.length}
                </Text>
              </View>
            </>
          )}
        </View>

     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sliderContainer: {
    width: "90%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 8,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 8,
  },
  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  paginationText: {
    color: "#fff",
    fontWeight: "bold",
  },
 

});

export default Home;
