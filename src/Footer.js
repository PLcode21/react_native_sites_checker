import React from 'react';
import { View, Text } from 'react-native';

const listFooter = () => {
    return (
        <View>
            <Text style={{color:'black', fontWeight: "bold", fontSize: 22, backgroundColor:"black"}}>Sites Stalking Company®           Rmag</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        padding: 10,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 18,
        color: 'gray',
    },
});

export default listFooter;