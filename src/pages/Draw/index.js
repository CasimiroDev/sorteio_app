import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {StatusBar} from 'expo-status-bar'

function Draw ({ navigation: { navigate } }) {
    const [number,setNumber] = useState()
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <TouchableOpacity style={styles.button} onPress={()=>{setNumber(((Math.random()*100) + 1).toFixed())}}>
                <Text style={styles.text}>Sortear</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigate('NewTicket', { slcNumber: number})}>
                <Text style={styles.result}>{number}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={()=>{setNumber()}}>
                <Text style={styles.text2}>Limpar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121229',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0a0',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 48
    },
    button2: {
        backgroundColor: 'transparent',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 48,
    },
    text: {
        fontSize: 20
    },
    text2: {
        fontSize: 20,
        color: '#FFF'
    },
    result: {
        fontSize: 48,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 48
    }
})

export default Draw;