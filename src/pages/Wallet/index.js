import React, { useState, useEffect } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator'

import { Container, Info, InfoText, Title, Value } from './styles';

import { db } from '../../config/firebase';
import { doc, onSnapshot } from '@firebase/firestore';

function Wallet(){
  const [progress, setProgress] = useState(100)
  const [price, setPrice] = useState(5)
  const [value, setValue] = useState(0)
  
  var color = '#0a0';
  
  useEffect(async()=>{
    await onSnapshot( doc(db, "ValorRifa","numeros"), doc => {
      setProgress(doc.data().livres)
    })
    await onSnapshot( doc(db, "ValorRifa","ValorGeral"), doc => {
      setPrice(doc.data().price)
    })
    await onSnapshot( doc(db, "ValorRifa","Recebido"), doc => {
      setValue(doc.data().recivedValue)
    })
    // await onSnapshot( doc(db, "DadosRifa"))
  },[])
  
  if(progress > 80 && progress <= 100){
    color = '#0a0'
  }
  else if(progress > 60 && progress <= 80){
    color = '#9a0'
  }
  else if(progress > 40 && progress <= 60){
    color = '#fc0'
  }
  else if(progress > 20 && progress <= 40){
    color = '#f50'
  }
  else if(progress > 0){
    color = '#F00'
  }
  else{
    color = '#000'
  }

  return (
    <Container>
      <Title>Carteira</Title>
      <CircularProgress
        radius={90}
        value={progress}
        activeStrokeColor={color}
        inActiveStrokeColor={color}
        inActiveStrokeOpacity={.3}
        maxValue={100}
        textColor='#FFF'
      />
      <Info>
        <InfoText>Valor Recebido:</InfoText>
        <Value>R${value.toFixed(2).replace('.', ',')}</Value>
        <InfoText>Último vendido:</InfoText>
        <Value></Value>
      </Info>
    </Container>
  )
}

export default Wallet;