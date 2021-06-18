import styled from 'styled-components/native';
import Colors from '../../styles/colors';

//@ts-ignore
export const TitleBlue = styled.Text`
	font-size: 45px;
	color: ${Colors.myDark};
`;

//@ts-ignore
export const TextBigDark = styled.Text`
	font-size: 35px;
	color: ${Colors.myDark};
	font-weight: bold;
`;

//@ts-ignore
export const TextBigLight = styled.Text`
	font-size: 34px;
	color: ${Colors.myLight};
`;

//@ts-ignore
export const TextLight = styled.Text`
	font-size: 20px;
	color: ${Colors.myLight};
	width: 75%;
	margin: 0 auto;
	text-align: center;
`;

//@ts-ignore
export const Tags = styled.Text`
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-weight: bold;
	color: ${Colors.myLight};
`;
