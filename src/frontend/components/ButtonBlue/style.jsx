import styled from 'styled-components/native';
import Colors from '../../style/colors';

export const Button =  styled.TouchableOpacity`
    background-color: ${Colors.myLight};
    padding: 20px 0;
	width: 250px;
	align-items: center;
    margin-top: 30px;
	border: none;
	border-radius: 20px;
`;

export const TextButton = styled.Text`
    color: ${Colors.myWhite};
`
