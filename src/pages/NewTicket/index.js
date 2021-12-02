import React, {useState} from 'react';
import { Container, TitleContainer, Title, SubTitle, InputContainer, InputField, InputText, SendButton, CancelButton, CancelButtonText, ButtonContainer,  } from './styles'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

function NewTicket({route, navigation}) {
    const [phone,setPhone] = useState('')
    const { slcNumber } = route.params;

    function textCaptalize(text){
        var cleaned = ('' + text).replace(/\D/g, '')
        var match = cleaned.match(/^(1|)?(\d{2})(\d{5})(\d{4})$/)
        if (match) {
            var intlCode = (match[1] ? '+55 ' : ''),
                number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');

            setPhone(number)

            return;
        }
        setPhone(text)
    }

    return(
        <Container>
            <TitleContainer>
                <Title>Preencha as informações</Title>
                <SubTitle>Número selecionado: {slcNumber}</SubTitle>
            </TitleContainer>
            <InputContainer>
                <InputText>Nome:</InputText>
                <InputField />
                <InputText>Telefone:</InputText>
                <InputField keyboardType='numeric' onChangeText={(text)=>textCaptalize(text)} value={phone} maxlength={15}/>
            </InputContainer>
            <ButtonContainer>
                <CancelButton onPress={()=>{navigation.goBack()}}>
                    <CancelButtonText>Cancelar</CancelButtonText>
                </CancelButton>
                <SendButton>
                    <Icon name='content-save' size={22} color={'#fff'}/>
                </SendButton>
            </ButtonContainer>
        </Container>
    )
}

export default NewTicket;