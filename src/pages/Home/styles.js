import styled from 'styled-components/native'

const Container = styled.ScrollView`
    flex: 1;
    background-color: #121229;
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
    `;

const NumberContainer = styled.View`
    flex: 1;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 60px;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 20px;
`;

export { Title, Container, NumberContainer }