import React from 'react';
import { Alert, FlatList, StatusBar } from 'react-native';
import { lists } from '../../backend/data/objeto';
import { Container } from '../styles';
import { Title } from '../components/text';
import { List } from '../components/iten';
import { More } from '../components/button';

export default function Lists({ title = 'Listas' }) {
	return (
		<Container>
			<StatusBar />
			<Title text={title} />
			<FlatList
				style={{ width: '100%', height: '80%', marginTop: 10 }}
				data={lists}
				keyExtractor={(item) => String(item.id)}
				showsVerticalScrollIndicator={true}
				renderItem={({ item }) => <List id={item.id} title={item.title} />}
			/>
			<More onPress={() => Alert.alert('Criando nova lista!')} />
		</Container>
	);
}
