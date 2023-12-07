import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


export const Favorites = () => {
    const { data } = useSelector((state: RootState) => state.favorites);
    console.log(data);
    return (
        <ScrollView contentContainerStyle={styles.contentList}>
            {data.map((item, index) => (
                <View style={{justifyContent:'center', alignItems:'center', margin:10}} key={index}>
                    <Text style={{
                        color:'white',
                        fontSize:25,
                        fontWeight:'bold'
                    }} >{item?.show?.name}</Text>
                    <Text >{item?.show?.id}</Text>
                    <Image
                        style={{ width: 300, height: 500, borderRadius: 10 }}
                        source={{ uri: item.show.image.medium }} />
                </View>
            ))}
        </ScrollView>
    )
}

export default Favorites;

const styles = StyleSheet.create({
    contentList: {
        flexGrow: 1,
        backgroundColor: 'black'
    },
})