import React from 'react';
import { Title } from '../components/text';
import { ButtonDelete } from '../components/button';
import { Container } from '../style/index';

export default function OneMyList() {
	return (
		<Container>
			<Title text="Minhas Listas" />
			<ButtonDelete click="true" />
		</Container>
	);
}
