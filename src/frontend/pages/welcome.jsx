import React, { useEffect } from 'react';
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
		</Container>
	);
}
