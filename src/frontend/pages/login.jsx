import React from 'react';
import { Container } from '../style/index';
import { BlueTitle } from '../components/BlueTitle';
import { GrayInput } from '../components/GrayInput';
import { ButtonBlue } from '../components/ButtonBlue';

export default function Login() {
	return (
		<Container>
			<BlueTitle>Vamos lá!</BlueTitle>
			<GrayInput place="Digite seu e-mail" type="email-address"></GrayInput>
			<GrayInput place="Digite sua senha" secure={true}></GrayInput>
			<ButtonBlue>Entrar</ButtonBlue>
		</Container>
	);
}
