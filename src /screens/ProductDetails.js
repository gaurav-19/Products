import React from "react";
import { Dimensions, StyleSheet, Image, Pressable, ScrollView, Text, View } from "react-native";
import { Colors } from "../utils/Colors";
import Button from "../components/Button";
const { height } = Dimensions.get('window');

const ProductDetails = ({ product, onBackPress, onDeleteProduct }) => {

    return (
        <View style={styles.safe}>
             <ScrollView contentContainerStyle={styles.container}>
           
                <Image  style={styles.image} source={{uri: product?.image}} />
                
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>

                <Pressable onPress={onBackPress} style={styles.backContainer} >
                    <Image style={styles.backIcon} source={{uri:'https://cdn-icons-png.flaticon.com/128/8800/8800461.png'}} />
                </Pressable>
                
            </ScrollView>
            <View style={styles.footer}>
                    <Button text='Delete' onPress={() => onDeleteProduct(product.id)}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    safe:{
        flex: 1
    },
    image:{
        width: "100%",
        height: height * 0.45
    },
    content:{
        backgroundColor: Colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24
    },
    title:{
        marginTop: 40,
        fontSize: 24,
        fontWeight: "500",
        color: Colors.black,
    },
    price:{
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 8,
        color: Colors.black,
    },
    description:{
        color: Colors.darkGrey,
        fontWeight: "300",
        marginVertical: 8
    },
    backContainer:{
        position: "absolute",
        backgroundColor: Colors.white,
        padding: 5,
        borderRadius: 8,
        margin: 20
    },
    backIcon:{
        width: 24,
        height: 24,
    },
    footer:{
        paddingVertical: 8,
        paddingHorizontal: 24,
        alignItems: "center",
    },
})

export default ProductDetails;