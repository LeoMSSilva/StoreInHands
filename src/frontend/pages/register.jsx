<<<<<<< HEAD
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
=======
import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { UserContext } from '../../backend/contexts/user';
import { Container, KeyboardCol } from '../styles/index';
import { Title } from '../components/text';
import { InputText } from '../components/input';
import { Button } from '../components/button';

export default function Register({ navigation }) {
	//@ts-ignore
	const {email, setEmail, password, setPassword, handleSignUp } = useContext(UserContext);
	
	return (
		<Container>
			<StatusBar />
			<Title text="Vamos lá!" />
			<KeyboardCol behavior="height">
				<InputText keyboardType={'email-address'} placeholder="Digite seu e-mail" value={email} setValue={setEmail} />
				<InputText keyboardType={'ascii-capable'} placeholder="Digite sua senha" value={password} setValue={setPassword} password={true} />
				<Button onPress={() => handleSignUp()} text="Cadastrar" />
			</KeyboardCol>
				<Button invert={true} onPress={() => navigation.goBack()} text="Voltar" />
>>>>>>> origin/develop
		</Container>
	);
}
