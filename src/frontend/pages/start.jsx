import React from 'react';
import { Button } from '../components/button';
import { TextBigBlue } from '../components/text';
import { Container } from '../style/index';

export default function Start({ navigation }) {
	return (
		<Container>
			<TextBigBlue text="Já tem login?" />
			<Button text="Entrar" click={() => navigation.navigate('login')} />
			<TextBigBlue text="Que tal criar uma conta?" />
			<Button text="Cadastrar" click={() => navigation.navigate('register')} />
		</Container>
	);
}
