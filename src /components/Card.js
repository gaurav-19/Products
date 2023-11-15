import React, { useState } from "react";
import { Image, Dimensions, Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../utils/Colors";
const { width } = Dimensions.get('window');

const Card = ({ item, onPress }) => {
    return (    
        <Pressable style={styles.container} onPress={() => onPress(item)}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <Text style={styles.title}> { item.title } </Text>
            <Text style={styles.price}> { item.price } </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container:{
        margin: 8,
    }, 
    title:{
        color: Colors.black,
        paddingVertical:  8,
        fontSize: 16
    },
    image : {
        width: (width - 64) / 2,
        height: 200,
        borderRadius: 8
    },
    price:{
        color: Colors.darkGrey, 
        fontWeight: 'bold',
        fontSize: 14,
        paddingBottom: 10 
    }
})

export default Card;