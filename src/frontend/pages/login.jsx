import React from 'react';
import { TextBigBlue } from '../components/text';
import { Button } from '../components/button';
import { InputPassorwd, InputText } from '../components/input';
import { Container } from '../style/index';

export default function Login({ navigation }) {
	return (
		<Container>
			<TextBigBlue text="Vamos lá!" />
			<InputText placeholder="Digite seu e-mail" />
			<InputPassorwd placeholder="Digite sua senha" />
			<Button text="Entrar" click={() => navigation.navigate('welcome')} />
		</Container>
	);
}
