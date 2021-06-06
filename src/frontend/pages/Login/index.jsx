import React, { useState, useContext } from 'react';
import { Container } from '../../style/index';
import { BlueTitle } from '../../components/BlueTitle';
import { SmallBlue } from '../../components/ButtonBlue';
import { GrayInput } from '../../components/GrayInput';
import { ButtonBlue } from '../../components/ButtonBlue';

export default function Login() {
	const [carregando, setCarregando] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSignIn() {
		// alert('clicou');
		// console.warn('clicou');

		try {
			console.warn(email, password);
			signIn(email, password);
		} catch (err) {
			console.warn(err);
		}
	}

	function handleSignUp() {
		setCarregando(true);
		try {
			signUp(email, password);
		} catch (err) {
			console.warn(err);
		} finally {
			setCarregando(false);
		}

		// setTimeout(() => {
		//   setCarregando(false);
		// }, 4000);
	}

	return (
		<Container>
			<BlueTitle>Vamos lá!</BlueTitle>
			<GrayInput
				place="Digite seu e-mail"
				type="email-address"
				oCT={(email) => setEmail(email)}
				value={email}
			></GrayInput>
			<GrayInput place="Digite sua senha" secure={true} oCT={(pass) => setPassword(pass)} value={password}></GrayInput>
			<ButtonBlue
				onPress={() => {
					handleSignIn();
				}}
			>
				Entrar
			</ButtonBlue>
			<SmallBlue>Cadastre-se</SmallBlue>
		</Container>
	);
}

function GrayInput({place, secure=false, type="default", oCT, value}) {
	console.warn(value)
	return <InputField placeholder={place} secureTextEntry={secure} keyboardType={type} onChangeText={oCT} value={value}></InputField>;
}
