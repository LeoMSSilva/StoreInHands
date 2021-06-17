import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StatusBar } from 'react-native';
import { lists } from '../../backend/data/objeto';
import { Container, Row } from '../styles';
import { Title, Tag } from '../components/text';
import { Iten } from '../components/iten';
import { More } from '../components/button';

export default function Itens({ title = 'Açougue', id = 0 }) {
	const [isSelected, setIsSelected] = useState(false);
	const sum = () => {
		useEffect(() => {
			/*função para somar */
			Alert.alert(`iten ${id} clicado!`);
		}, [isSelected]);
	};
	return (
		<Container>
			<StatusBar />
			<Title text={title} />
			<Row style={{ width: '100%', margin: 10 }}>
				<Tag text={'Adicionar'} />
				<Tag text={'Item'} />
				<Tag text={'Quantidade'} />
				<Tag text={'Preço'} />
			</Row>
			<FlatList
				style={{ width: '100%', height: '80%' }}
				data={lists[id].itens}
				keyExtractor={(item) => String(item.id)}
				showsVerticalScrollIndicator={true}
				renderItem={({ item }) => (
					<Iten
						isSelected={isSelected}
						setIsSelected={setIsSelected}
						id={item.id}
						name={item.name}
						quantity={item.quantity}
						price={item.price}
					/>
				)}
			/>
			<More onPress={() => Alert.alert('Adicionado novo item na lista!')} />
		</Container>
	);
}
