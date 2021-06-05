import styled from 'styled-components';
import Colors from './colors'

export const Container = styled.SafeAreaView`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${Colors.myBackground};
	margin: 0;
	padding: 0;
`;
