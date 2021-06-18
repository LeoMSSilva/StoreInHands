import React, { useEffect } from 'react';
<<<<<<< HEAD
import { TextBigBlue, TextBig, Text } from '../components/text';
import { useUser } from '../contexts/userContext';
import { Container } from '../style/index';

export default function Welcome({ navigation }) {
	const { user } = useUser();
	useEffect(() => {
		setTimeout(() => navigation.navigate('myLists'), 1000);
	}, []);

	return (
		<Container>
			<TextBig text="Olá," />
			<TextBigBlue text={user} />
			<Text text="Agora vamos começar as gerenciar suas listas." />
=======
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
>>>>>>> origin/develop
		</Container>
	);
}
