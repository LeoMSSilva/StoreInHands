import React from 'react';
import Text from '../components/text';
import Button from '../components/button';
import Input from '../components/input';

export default function Login({ navigation }) {
	return (
		<>
			<Text size="big" color="dark" text="Vamos lá!" />
			<Input placeholder="Digite seu e-mail" />
			<Input placeholder="Digite sua senha" type="password" />
			<Button text="Entrar" click={() => navigation.navigate('welcome')} type="normal" />
		</>
	);
}
