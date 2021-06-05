import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../style/index';
import Colors from '../style/colors';

export default function Welcome({userName="Usuário"}) {
	return (
		<Container>
			<TextBlock><TextBlockHigh>Olá,</TextBlockHigh> <TextHighLight >{userName}</TextHighLight></TextBlock>
			<TextBlock>Agora vamos começar a</TextBlock>
			<TextBlock>gerenciar suas listas.</TextBlock>
		</Container>
	);
}

const TextBlock = styled.Text`
	justify-content: center;
	font-size: 17px;
	color: ${Colors.myGray};
	margin: 0;
	padding: 0;
`;

const TextBlockHigh = styled.Text`
	justify-content: center;
	font-size: 22px;
	color: ${Colors.myGray};
	margin: 0;
	padding: 0;
`;

const TextHighLight = styled.Text`
	justify-content: center;
	font-weight: 900;
	font-size: 24px;
	color: ${Colors.myDark};
	margin: 0;
	padding: 0;
`;