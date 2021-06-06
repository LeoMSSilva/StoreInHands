import React, { useState, useContext } from 'react';
import { Container } from '../style/index';
import { BlueTitle } from '../components/BlueTitle';
import { SmallBlue } from '../components/ButtonBlue';
import { GrayInput } from '../components/GrayInput';
import { ButtonBlue } from '../components/ButtonBlue';

export default function Login() {


	return (
		<Container>
			<BlueTitle>Vamos lá!</BlueTitle>
			<GrayInput
				place="Digite seu e-mail"
				type="email-address"
				
			></GrayInput>
			<GrayInput place="Digite sua senha" secure={true} oCT={(pass) => setPassword(pass)} ></GrayInput>
			<ButtonBlue
				
			>
				Entrar
			</ButtonBlue>
			<SmallBlue>Cadastre-se</SmallBlue>
		</Container>
	);
}
