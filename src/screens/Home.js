import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "../components/icon";
import data from "../data/products.json";
import Item from "../components/item";

const icons = [
  { name: "cellphone", size: 22, color: "#22D4FFFF", iconText: "Iphone" },
  { name: "android", size: 22, color: "#22D4FFFF", iconText: "Samsung" },
  { name: "laptop", size: 22, color: "#22D4FFFF", iconText: "Laptop" },
  { name: "cellphone", size: 22, color: "#22D4FFFF", iconText: "Iphone" },
  { name: "android", size: 22, color: "#22D4FFFF", iconText: "Samsung" },
  { name: "laptop", size: 22, color: "#22D4FFFF", iconText: "Laptop" },
];

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchTerm: "",
    };
  }

  sortCheapest = () => {
    const productsObj = this.state.products || {}; 
    const arr = Array.isArray(productsObj.popularproducts)
      ? [...productsObj.popularproducts]
      : [];
    const sorted = arr.sort(
      (a, b) =>
        Number(a.price.replace(/[^0-9.-]+/g, "")) -
        Number(b.price.replace(/[^0-9.-]+/g, ""))
    );
    this.setState({ products: { ...productsObj, popularproducts: sorted } });
  };

  sortMostExpensive = () => {
    const productsObj = this.state.products || {};
    const arr = Array.isArray(productsObj.popularproducts)
      ? [...productsObj.popularproducts]
      : [];
    const sorted = arr.sort(
      (a, b) =>
        Number(b.price.replace(/[^0-9.-]+/g, "")) -
        Number(a.price.replace(/[^0-9.-]+/g, ""))
    );
    this.setState({ products: { ...productsObj, popularproducts: sorted } });
  };

  handleSearch = (text) => {
    this.setState({ searchTerm: text });
  };

  getFilteredProducts = () => {
    const { products, searchTerm } = this.state;
    if (!products.popularproducts) return [];
    return products.popularproducts.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  componentDidMount() {
    this.setState({
      products: data,
    });
  }

  render() {
    const filteredProducts = this.getFilteredProducts();
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search by title..."
              value={this.state.searchTerm}
              onChangeText={this.handleSearch}
            />
          </View>
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
          <View style={styles.grid}>
            {icons.map((item, index) => (
              <Icon 
                key={index}
                name={item.name}
                size={item.size}
                color={item.color}
                iconText={item.iconText}
              />
            ))}
          </View>
          <View style={styles.sortConatiner}>
            <TouchableOpacity style={styles.btn} onPress={this.sortCheapest}>
              <Text style={styles.sortText}>From Cheapest</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sortConatiner}>
            <TouchableOpacity
              style={styles.btn}
              onPress={this.sortMostExpensive}
            >
              <Text style={styles.sortText}>From most Expensive</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productsContaoner}>
            <Text style={styles.title}>Most popular products</Text>
            <FlatList
              data={filteredProducts}
              renderItem={({ item }) => (
                <View>
                  <Item item={item} />
                </View>
              )}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>View More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },
  productsContaoner: {
    marginHorizontal: 20,
  },
  title: {
    marginTop: 35,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#22D4FF",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
  sortConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    borderRadius: 20,
  },
  sortText: {
    color: "white",
    fontWeight: "bold",
  },
  sortConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    borderRadius: 20,
  },
  sortText: {
    color: "white",
    fontWeight: "bold",
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  searchInput: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
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
