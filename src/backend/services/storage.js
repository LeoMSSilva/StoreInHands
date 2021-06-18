import { Alert } from 'react-native';

export function handleDelete(id) {
	Alert.alert('Excluir', 'Tem certeza que quer remover esse item?', [
		{
			text: 'Sim',
			onPress: () => Alert.alert(`Deletado item ${id}!`),
			style: 'destructive',
		},
		{
			text: 'Não',
			onPress: () => Alert.alert('Cancelado'),
			style: 'cancel',
		},
	]);
}

export function handleUpdate(id) {
	Alert.alert('Salvar', `Salvando item ${id}!`);
}
