import React from 'react';
import { View,  FlatList, StyleSheet, Text, Image } from 'react-native';


const FlatListSites = () => {
    const data = [
        { id: 1, title: 'Customer Site 1' },
        { id: 2, title: 'Customer Site 2' },
        { id: 3, title: 'Customer Site 3' },
        { id: 4, title: 'Customer Site 4' },
        { id: 5, title: 'Customer Site 5' },
        { id: 6, title: 'Customer Site 6' },
        { id: 7, title: 'Customer Site 7' },
        { id: 8, title: 'Customer Site 8' },
        { id: 9, title: 'Customer Site 9' },
        { id: 10, title: 'Customer Site 10' },
        { id: 11, title: 'Customer Site 11' },
        { id: 12, title: 'Customer Site 12' },
        { id: 13, title: 'Customer Site 13' },
        { id: 14, title: 'Customer Site 14' },
        { id: 15, title: 'Customer Site 15' },
        { id: 16, title: 'Customer Site 16' },
        { id: 17, title: 'Customer Site 17' },
        { id: 18, title: 'Customer Site 18' },
        { id: 19, title: 'Customer Site 19' },
        { id: 20, title: 'Customer Site 20' },

    ];

    const renderItem = ({ item }) => (
        <View style={StyleSheetList.item}>
            <Text style={StyleSheetList.title}>{item.title}</Text>

        </View>
    );
    return (
        <View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={{color: 'orange', margin: 'auto'}}
            />

        </View>
    );
};

const StyleSheetList = StyleSheet.create({
    item: {
        width: 300,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 16,
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 10,
        fontSize: 32,
    },
})

export default FlatListSites;