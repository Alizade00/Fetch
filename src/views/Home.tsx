import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

function Home() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HOME</Text>
            <Button title="BottomScreen" onPress={()=>navigation.navigate('bottom')} />
        </View>
    );
}

export default Home;