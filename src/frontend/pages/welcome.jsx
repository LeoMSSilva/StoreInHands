import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container, Row } from '../styles/index';
import { TextBigBlue, TextBig, Text } from '../components/text';

export default function Welcome({ navigation, userName = 'Usuário' }) {
	useEffect(() => {
		setTimeout(() => navigation.navigate('lists'), 1500);
	}, []);

	return (
		<Container>
			<StatusBar />
			<Row>
				<TextBig text="Olá, " />
				<TextBigBlue text={userName} />
			</Row>
			<Text text={`Agora vamos começar`} />
			<Text text={`a gerenciar suas listas.`} />
		</Container>
	);
}
