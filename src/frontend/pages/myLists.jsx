import React from 'react';
import { ButtonDelete } from '../components/button';
import { Title } from '../components/text';
import { Container } from '../style/index';

export default function MyLists() {
	return (
		<Container>
			<Title text="Minhas Listas" />
			<ButtonDelete click="true" />
		</Container>
	);
}
