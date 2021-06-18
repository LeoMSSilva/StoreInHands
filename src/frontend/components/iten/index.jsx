import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CurrencyInput from 'react-native-currency-input';
import { Check, KeyboardRow } from '../../styles';
import Colors from '../../styles/colors';
import { InputIten } from '../input/index';
import { ButtonDelete } from '../button/index';
import { Card } from '../button/style';

export function Iten({ name, quantity, price, id, isSelected, setIsSelected }) {
	const [pricee, setPricee] = useState(price);
	const [namee, setNamee] = useState(name);
	const [quantityy, setQuantityy] = useState(quantity);
	const [update, setUpdate] = useState(false);

	return (
		<ButtonDelete
			update={update}
			setUpdate={setUpdate}
			id={id}
			Children={
				<Card id={id}>
					<KeyboardRow behavior="height">
						<Check>
							<BouncyCheckbox
								size={18}
								fillColor={Colors.myDark}
								unfillColor={Colors.myBackground}
								iconStyle={{
									borderWidth: 2,
									borderColor: Colors.myBackground,
								}}
								onPress={() => {
									Alert.alert(`O preço em quantidade é: R$ ${quantityy * pricee}`);
									setIsSelected(!isSelected);
								}}
							/>
						</Check>

						<InputIten value={namee} setValue={setNamee} placeholder={namee} width={'40%'} />

						<CurrencyInput
							precision={0}
							onChangeValue={setQuantityy}
							value={quantityy}
							placeholder={`${quantityy}`}
							keyboardType={'numeric'}
							style={{
								...Platform.select({ web: { outline: 'none' } }),
								width: '15%',
								height: 30,
								textAlign: 'center',
								justifyContent: 'flex-end',
								fontSize: 16,
								color: Colors.myWhite,
							}}
						/>

						<CurrencyInput
							value={pricee}
							onChangeValue={setPricee}
							prefix="R$"
							delimiter="."
							separator=","
							precision={2}
							keyboardType={'numeric'}
							style={{
								...Platform.select({ web: { outline: 'none' } }),
								width: '25%',
								height: 30,
								textAlign: 'center',
								justifyContent: 'flex-end',
								fontSize: 16,
								color: Colors.myWhite,
							}}
						/>
					</KeyboardRow>
				</Card>
			}
		/>
	);
}

export function List({ title, id }) {
	const navigation = useNavigation();
	const [titlee, setTitlee] = useState(title);
	const [update, setUpdate] = useState(false);

	return (
		<ButtonDelete
			update={update}
			setUpdate={setUpdate}
			id={id}
			Children={
				<Card id={id} onPress={() => navigation.navigate('itens', { id: id })}>
					<KeyboardRow behavior="height">
						<InputIten value={titlee} setValue={setTitlee} placeholder={titlee} width={'50%'} />
					</KeyboardRow>
				</Card>
			}
		/>
	);
}
