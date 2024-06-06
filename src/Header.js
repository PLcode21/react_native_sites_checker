import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import TimeComponent from './TimeComponent';

const listHeader = () => {

    const [showTime, setShowTime] = useState(false);

    const handleButtonPress = () => {
        setShowTime(!showTime);
    };

    return (
        <View>
            <Text style={{ fontSize: 42, color: 'black', margin: 'auto' }}>PL</Text>

            <Button
                title={showTime ? 'Masquer l\'heure' : 'Afficher l\'heure'}
                onPress={handleButtonPress} />

            {showTime && <TimeComponent/>}

        </View>


    );




};

export default listHeader;