import React, { useEffect } from 'react';
import Text from '../components/text';
import {useUser} from '../contexts/userContext';

export default function Welcome({ navigation }) {
	const { user } = useUser();
	useEffect(() => {
		setTimeout(() => navigation.navigate('myLists'), 1000);
	}, []);

	return (
		<>
			<Text text="Olá," size="Big" />
			<Text text={user} size="Big" color="dark" />
			<Text text="Agora vamos começar as gerenciar suas listas." />
		</>
	);
}
