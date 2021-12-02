import React, { useEffect, useState } from 'react';
import {setStatusBarBackgroundColor, StatusBar} from 'expo-status-bar'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Title, Container, NumberContainer } from './styles';

import { useNavigation } from '@react-navigation/native';
import { db } from '../../config/firebase';
import { collection, onSnapshot, query } from '@firebase/firestore';


function Home(){
  
  const navigation = useNavigation()
  const [numbers, setNumbers] = useState([])
  
  useEffect(async()=>{
    await onSnapshot(query(collection(db, "DadosRifa")), (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
          list.push(doc.data());
    });
    setNumbers(list)
    
  }),[]})

  return(
    <Container>
        <Title>Selecione o número desejado:</Title>
        <NumberContainer>
            {
              numbers.sort((a,b)=> a.number - b.number).map(n => 
                {
                  return(
                  <TouchableOpacity
                    style={[styles.container, { backgroundColor: n.name !== "" ? "#0a0" : "#fff"}]}
                    onPress={()=>{navigation.navigate('NewTicket', { slcNumber: n.number})}}
                    key={n.number}
                  >
                    <Text style={styles.text}>{n.number}</Text>
                  </TouchableOpacity>
                  )
                }
              )
            }
        </NumberContainer>
        <StatusBar style='light'/>
    </Container>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 8,
    },
    text: {
        fontSize: 24,
        color: '#121229'
    }
})


export default Home;