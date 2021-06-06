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


export const InputField = styled.TextInput.attrs({
	placeholderTextColor: '#ccc',
	
})`
	text-align: center;
	border-bottom-color: #ccc;
    border-bottom-width: 1px;
    color: #ccc;
	height: 50px;
	padding: 0px 20px;
	margin-top: 30px;
    width: 300px;
	font-size: 16px;
`;
