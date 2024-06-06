import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const TimeComponent = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = new Date();
            setTime(currentTime.toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Text style={{ fontSize: 30, marginHorizontal: 145 }}>{time}</Text>
    );
};

export default TimeComponent;