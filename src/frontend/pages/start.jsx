import React from 'react';
import Text from '../components/text';
import Button from '../components/button';

export default function Start({ navigation }) {
	return (
		<>
			<Text text="Já tem Login?" size="big" color="dark" />
			<Button text="Entrar" click={() => navigation.navigate('login')} type="normal" />
			<Text text="Que tal criar uma conta?" size="big" color="dark" />
			<Button text="Cadastrar" click={() => navigation.navigate('register')} type="normal" />
		</>
	);
}
