import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddItemButton = ({ newItem, setNewItem, handleAddItem }) => {
    return (
        <View style={styles.buttonContainer}>
            <TextInput
                style={styles.input}
                value={newItem}
                onChangeText={(text) => setNewItem(text)}
                placeholder="Entrez un élément à ajouter"
            />
            <Button title="Ajouter" onPress={handleAddItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
    },
});

export default AddItemButton;