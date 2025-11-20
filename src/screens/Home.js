import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/icon";

const icons = [
  {name:"cellphone", size:22, color:"#22D4FFFF", iconText:"Iphone"},
  {name:"android", size:22, color:"#22D4FFFF", iconText:"Samsung"},
  {name:"laptop",size:22, color:"#22D4FFFF", iconText:"Laptop"},
  {name:"cellphone", size:22, color:"#22D4FFFF", iconText:"Iphone"},
  {name:"android", size:22, color:"#22D4FFFF", iconText:"Samsung"},
  {name:"laptop",size:22, color:"#22D4FFFF", iconText:"Laptop"},

]

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay={true}
          activeDotColor="rgba(34, 212, 255, 1)"
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
        </Swiper>
      </View>
     <View style={style.grid}>
       {icons.map((item, index)=> (
        <Icon 
        key={index}
        name={item.name}
        size={item.size}
        color={item.color}
        iconText={item.iconText}/>
       ))} 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },

  sliderContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 8,
  },

  imgItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  item: {
    flex: 1,
    justifyContent: "center",
  },
  grid:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    width:"90%",
    alignSelf:"center",
    marginTop:30 ,
  }
  
});

export default Home;

/*import React from "react";
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

export default Home;*/
