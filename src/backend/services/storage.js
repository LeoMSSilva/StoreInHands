import { Alert } from 'react-native';

export function handleBlur() {
	Alert.alert(`Salvando ...`);
}

export function handleDelete(id) {
	Alert.alert('Excluir item', 'Tem certeza que quer remover esse item?', [
		{
			text: 'Sim',
			onPress: () => Alert.alert(`Deletado ${id}`),
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
	Alert.alert(`Salvando ${id}`);
}
