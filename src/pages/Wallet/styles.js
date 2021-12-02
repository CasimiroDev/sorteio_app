import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: #121229;
  align-items: center;
  padding-top: 70px;
`;

const Title = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Info = styled.View`
    flex-direction: column;
    align-items: center;
`;

const InfoText = styled.Text`
    color: #FFF;
    margin-top: 40px;
`;

const Value = styled.Text`
    color: #ffc600;
    font-weight: bold;
    font-size: 18px;
`;

export { Container, Title, Info, InfoText, Value }
