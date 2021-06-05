import React from 'react';
import { Container } from '../style/index';
import { BlueTitle } from '../components/BlueTitle';
import { GrayInput } from '../components/GrayInput';
import { ButtonBlue } from '../components/ButtonBlue';

export default function Register() {
	return (
		<Container>
			<BlueTitle>Vamos lá!</BlueTitle>
			<GrayInput place="Digite seu usuário"></GrayInput>
			<GrayInput place="Digite seu e-mail" type="email-address"></GrayInput>
			<GrayInput place="Digite sua senha" secure={true}></GrayInput>
			<ButtonBlue>Cadastrar</ButtonBlue>
		</Container>
	);
}
