import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddItemButton from './src/AddItemButton'; // Chemin correct vers AddItemButton
import ListFooter from './src/Footer'; // Chemin correct vers Footer
import ListHeader from './src/Header'; // Chemin correct vers Header

const STORAGE_KEY = '@items_key';

function App() {
    const [items, setItems] = useState([]); // État de la liste
    const [newItem, setNewItem] = useState(''); // État du contenu à ajouter

    // Charger les éléments depuis AsyncStorage
    const loadItems = async () => {
        try {
            const storedItems = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedItems) {
                setItems(JSON.parse(storedItems));
            }
        } catch (error) {
            console.error('Failed to load items from storage', error);
        }
    };

    // Enregistrer les éléments dans AsyncStorage
    const saveItems = async (items) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            console.error('Failed to save items to storage', error);
        }
    };

    // Ajouter un nouvel élément
    const handleAddItem = () => {
        if (newItem) {
            const updatedItems = [...items, newItem];
            setItems(updatedItems);
            setNewItem(''); // Vider le champ de saisie
            saveItems(updatedItems); // Enregistrer les éléments mis à jour
        }
    };

    // Supprimer un élément
    const handleRemoveItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        saveItems(updatedItems); // Enregistrer les éléments mis à jour
    };

    // Charger les éléments au montage du composant
    useEffect(() => {
        loadItems();
    }, []);

    // Afficher la mise à jour de la liste
    useEffect(() => {
        console.log('Liste mise à jour :', items);
    }, [items]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ListHeader />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <View style={styles.container}>
                    <AddItemButton
                        newItem={newItem}
                        setNewItem={setNewItem}
                        handleAddItem={handleAddItem}
                    />
                    <FlatList
                        data={items}
                        renderItem={({ item, index }) => (
                            <View style={styles.listItemContainer}>
                                <Text style={styles.listItem}>{item}</Text>
                                <Button
                                    title="Supprimer"
                                    onPress={() => handleRemoveItem(index)}
                                />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ScrollView>
            <ListFooter />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollView: {
        padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        width: '100%',
    },
    listItem: {
        fontSize: 18,
    },
});

export default App;
