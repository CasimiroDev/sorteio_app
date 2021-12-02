import styled from 'styled-components/native';

const Container = styled.View`
  padding-top: 20px;
  flex: 1;
`;

const TitleContainer = styled.View`
    margin: 20px auto;
`;

const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;

const SubTitle = styled.Text`
    font-size: 14px;
`;

const InputContainer = styled.View`
    width: 80%;
    margin: 20px auto;
`;

const InputText = styled.Text`
    font-size: 14px;

`;

const InputField = styled.TextInput`
    border-bottom-width: 1px;
    padding: 5px 0;
    margin-bottom: 50px;
`;

const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
    position: absolute;
    bottom: 40px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`;

const SendButton = styled.TouchableOpacity`
    background: #121229;
    padding: 15px;
    border-radius: 50px;
`;

const CancelButton = styled.TouchableOpacity`
    padding: 10px;
`;

const CancelButtonText = styled.Text`
    color: #ca2200;
    font-weight: bold;
`;

export { Container, TitleContainer, Title, SubTitle, InputContainer, InputField, InputText, ButtonContainer, SendButton, CancelButton, CancelButtonText }