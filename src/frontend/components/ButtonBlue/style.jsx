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

export const SmallButton =  styled.TouchableOpacity`
    padding: 20px 0;
	align-items: center;
	border: none;
`;

export const TextButton = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.font};
`
