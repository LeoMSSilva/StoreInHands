import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { UserContext } from '../../backend/contexts/user';
import { Container, KeyboardCol } from '../styles';
import { Title } from '../components/text';
import { InputText } from '../components/input';
import { Button } from '../components/button';

export default function Login({ navigation }) {
	//@ts-ignore
	const { email, setEmail, password, setPassword, handleSignIn } = useContext(UserContext);

	return (
		<Container>
			<StatusBar />
			<Title text="Vamos lá!" />
			<KeyboardCol behavior="height">
				<InputText keyboardType={'email-address'} placeholder="Digite seu e-mail" value={email} setValue={setEmail} />
				<InputText
					keyboardType={'ascii-capable'}
					placeholder="Digite sua senha"
					value={password}
					setValue={setPassword}
					password={true}
				/>
				<Button onPress={handleSignIn} text="Entrar" />
			</KeyboardCol>
			<Button invert={true} onPress={() => navigation.navigate('register')} text="Cadastre-se" />
		</Container>
	);
}
