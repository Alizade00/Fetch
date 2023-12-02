import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View } from 'react-native';

export const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');


    const fetchData = async () => {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchMovie}`);

        const responseJson = await response.json();
        setMovies(responseJson);
    };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const handleMovieName = () => {
    //     fetchData()
    // };

    return (
        <SafeAreaView style={{ backgroundColor: 'black' }}>
            <View style={styles.textInputArea}>
                <TextInput
                    placeholder='Search movie name here..'
                    style={{
                        width: 300,
                        height: 50,
                        borderRadius: 10,
                        borderWidth: 4,
                        borderColor: 'green',
                        backgroundColor: 'white',
                    }}
                    value={searchMovie}
                    onChangeText={(text) => setSearchMovie(text)}
                />
                <TouchableOpacity
                    onPress={fetchData}
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'green',
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image style={{
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                        source={require('./assets/icons/Search.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.contentList}>
                {movies.map((item, index) => (
                    <View style={styles.area} key={index}>
                        <Text style={styles.text}>{item.show.name}</Text>
                        <Image style={{ width: 300, height: 500, borderRadius: 10 }} source={{ uri: item.show.image.medium }} />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    contentList: {
        flexGrow: 1,
        backgroundColor: 'black'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    area: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    textInputArea: {
        margin: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    }
});