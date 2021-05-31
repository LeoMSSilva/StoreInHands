import React from 'react';
import Text from '../components/text';
import Button from '../components/button';
import Input from '../components/input';

export default function Register({ navigation }) {
	return (
		<>
			<Text size="big" color="blue" text="Vamos lá!" />
			<Input placeholder="Digite seu usuário" />
			<Input placeholder="Digite seu e-mail" />
			<Input placeholder="Repetir seu e-mail" />
			<Input placeholder="Digite sua senha" type="password" />
			<Input placeholder="Repetir sua senha" type="password" />
			<Button text="Cadastrar" click={() => navigation.navigate('welcome')} type="normal" />
		</>
	);
}
