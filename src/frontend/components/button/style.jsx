import styled from 'styled-components/native';
import Colors from '../../styles/colors';

//@ts-ignore
export const ButtonIcon = styled.TouchableOpacity``;

//@ts-ignore
export const TextButton = styled.Text`
	font-size: ${({ invert }) => (invert ? '14px' : '20px')};
	color: ${({ invert }) => (invert ? Colors.myDark : Colors.myWhite)};
`;

//@ts-ignore
export const CustonButton = styled.TouchableOpacity`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 25px;
	width: ${({ more }) => (more ? '100%' : '150px')};
	margin-top: 16px;
	background-color: ${({ invert }) => (invert ? 'transparent' : Colors.myLight)};
	border: none;
	border-radius: 20px;
`;

//@ts-ignore
export const Card = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 20px 0;
	background-color: ${({ id }) => (id % 2 === 1 ? `${Colors.myLight}` : `${Colors.myDark}`)};
	opacity: ${({ id }) => (id % 2 === 1 ? 1 : 0.8)};
`;
