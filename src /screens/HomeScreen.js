import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { PRODUCTS } from "../utils/Data";
import { Colors } from "../utils/Colors";
import ProductDetails from "./ProductDetails";

const HomeScreen = () => {
    const [products, Setproducts] = useState([]);
    const [showProductdetail, SetshowProductdetail] = useState(false);
    const [productdetail, Setproductdetail] = useState();
    const [loading, Setloading] = useState(true);

    useEffect(() => {
        fetch("/api/getallproducts")
          .then((res) => res.json())
          .then((json) => {
            Setproducts(json.products);
            Setloading(false)
        })
          .catch(err => console.log(err))
      },[]);

    const onItemClick = (detail) => {
        Setproductdetail(detail);
        SetshowProductdetail(true);
    }

    const onCloseClick = () => {
        Setproductdetail();
        SetshowProductdetail(false);
    }

    const onDeleteProduct = (id) => {
        fetch("/api/deleteproduct/"+id, {
            method: 'DELETE',
          })
        .then((res) => {
            console.log('Product deleted');

        })
        .catch(err => console.log(err));

       var newpro = products.filter(item => item.id !== id);
       Setproducts(newpro);
       onCloseClick();
    }
     
    return (<View style={styles.container}>

        { showProductdetail ?
            <ProductDetails product={productdetail} onBackPress={onCloseClick} onDeleteProduct={onDeleteProduct}/>
            : 
            <View style={styles.list}>
            <Text style={styles.title}>Products</Text>
            {loading ?
            <Text>Loading...</Text>
            : 
            <FlatList 
            data={products}
            renderItem={({item}) => <Card item={item} onPress={onItemClick} />}
            keyExtractor={item => item.id}
            numColumns={2}
            ListEmptyComponent={<Text>No products available!</Text>}
            /> }
            </View>}
            
    </View> )
    
};

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
    },
    list:{
        alignItems: 'center',
        marginBottom: 150
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
        color: Colors.black,
    },
});    

export default HomeScreen;