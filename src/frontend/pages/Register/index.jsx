import React, { useState, useContext } from 'react';
import { Container } from '../../style/index';
import { BlueTitle } from '../../components/BlueTitle';
import { InputField, Button, TextButton, SmallButton } from './style';
import Colors from '../../style/colors';
import {UsuarioContext} from '../../../backend/contexts/usuario'

export default function Register({navigation}) {
	const{signUp}=  useContext(UsuarioContext);
	const [carregando, setCarregando] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	

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
				<TextButton font="20px" color={Colors.myWhite} onPress={() => { handleSignUp() }}>
					Cadastrar
				</TextButton>
			</Button>
			<SmallButton>
			<TextButton font="13px" color={Colors.myDark} onPress={()=> navigation.navigate('login')}> Voltar</TextButton>
		</SmallButton>
		</Container>
	);
}
