import React from 'react';
import { TextBigBlue } from '../components/text';
import { Button } from '../components/button';
import { InputPassorwd, InputText } from '../components/input';
import { Container } from '../style/index';

export default function Register({ navigation }) {
	return (
		<Container>
			<TextBigBlue text="Vamos lá!" />
			<InputText placeholder="Digite seu usuário" />
			<InputText placeholder="Digite seu e-mail" />
			<InputText placeholder="Repetir seu e-mail" />
			<InputPassorwd placeholder="Digite sua senha" />
			<InputPassorwd placeholder="Repetir sua senha" />
			<Button text="Cadastrar" click={() => navigation.navigate('welcome')} />
		</Container>
	);
}
