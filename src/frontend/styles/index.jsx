import styled from 'styled-components/native';
import Colors from './colors';

//@ts-ignore
export const Container = styled.SafeAreaView`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${Colors.myBackground};
	margin: 0;
	padding: 0;
`;

//@ts-ignore
export const KeyboardCol = styled.KeyboardAvoidingView`
	justify-content: center;
	align-items: center;
	width: 100%;
`;

//@ts-ignore
export const KeyboardRow = styled.KeyboardAvoidingView`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

//@ts-ignore
export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: 34px;
	padding: 5px 10px;
`;

//@ts-ignore
export const Check = styled.View`
	height: 30px;
	align-items: center;
	justify-content: center;
`;
