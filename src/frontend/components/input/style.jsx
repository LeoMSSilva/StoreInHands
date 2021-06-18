import styled from 'styled-components/native';
import Colors from '../../styles/colors';

//@ts-ignore
export const TextInput = styled.TextInput.attrs({ placeholderTextColor: `${Colors.myLight}` })`
	height: auto;
	width: 75%;
	padding: 10px;
	margin-top: 18px;
	text-align: center;
	border-bottom-width: 2px;
	border-color: ${Colors.myLight};
	color: ${Colors.myLight};
	background-color: ${Colors.myGray};
	font-size: 16px;
`;

//@ts-ignore
export const ItenInput = styled.TextInput.attrs({ placeholderTextColor: `${Colors.myWhite}` })`
	text-align: center;
	justify-content: flex-start;
	font-size: 16px;
	color: ${Colors.myWhite};
	margin: 2px;
	height: 30px;
`;
