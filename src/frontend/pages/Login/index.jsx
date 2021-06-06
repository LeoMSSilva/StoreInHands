import React, { useState, useContext } from 'react';
import { Container } from '../../style/index';
import { BlueTitle } from '../../components/BlueTitle';
import { GrayInput } from '../../components/GrayInput';
import { ButtonBlue, SmallBlue } from '../../components/ButtonBlue';
import { InputField, Button, TextButton, SmallButton } from './styles';
import Colors from '../../style/colors';
import {UsuarioContext} from '../../../backend/contexts/usuario'

export default function Login({navigation}) {
	const {signUp} =  useContext(UsuarioContext);
	const [carregando, setCarregando] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSignIn() {
		// alert('clicou');
		// console.warn('clicou');

		try {
			signIn(email, password);
		} catch (err) {
			console.warn(err);
		}
	}

	return (
		<Container>
			<BlueTitle>Vamos lá!</BlueTitle>

			<InputField
				placeholder="Digite seu e-mail"
				keyboardType="email-address"
				onChangeText={(email) => setEmail(email)}
				value={email}
			></InputField>
			<InputField
				placeholder="Digite sua senha"
				secureTextEntry={true}
				onChangeText={(pass) => setPassword(pass)}
				value={password}
			></InputField>

			<Button>
				<TextButton font="20px" color={Colors.myWhite} onPress={() => { handleSignIn() }}>
					Entrar
				</TextButton>
			</Button>
			<SmallButton>
			<TextButton font="13px" color={Colors.myDark} onPress={()=> navigation.navigate('register')}> Cadastre-se</TextButton>
		</SmallButton>
		</Container>
	);
}
