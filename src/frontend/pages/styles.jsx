import styled from 'styled-components/native';
import Colors from '../style/colors';

export const Container = styled.View
`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.myLight};
	width: 100%;
	height: 100%;
`

export const SubContainer = styled.View
`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	margin: 10px 10px;
`

export const Title = styled.Text
`
	font-size: 45px;
	font-weight: bold;
	margin-top: 60px;
	color: ${Colors.myDark};
`

export const Card = styled.View
`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 350px;

	background: rgba(7, 106, 255, 0.6);
	border-radius: 15px;
	margin: 5px 10px;
	padding: 20px;
`

export const TextoContainer = styled.Text
`
  font-size: 18px;
  color: ${Colors.myWhite};
`

export const IconContainer = styled.TouchableOpacity
`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

