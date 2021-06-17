import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CurrencyInput from 'react-native-currency-input';
import { Check, KeyboardCol, KeyboardRow } from '../../styles';
import Colors from '../../styles/colors';
import { InputIten } from '../input/index';
import { ButtonDelete } from '../button/index';
import { Card } from '../button/style';
import { handleBlur } from '../../../backend/services/storage';

export function Iten({ name, quantity, price, id, isSelected, setIsSelected }) {
	const [pricee, setPricee] = useState(price || 0.0);
	const [namee, setNamee] = useState(name || '');
	const [quantityy, setQuantityy] = useState(quantity || 0);
	const [update, setUpdate] = useState(false);

	return (
		<ButtonDelete
			update={update}
			setUpdate={setUpdate}
			id={id}
			Children={
				<Card id={id}>
					<KeyboardRow behavior="padding">
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
									Alert.alert(`${quantityy * pricee}`);
									setIsSelected(!isSelected);
								}}
							/>
						</Check>

						<InputIten value={namee} setValue={setNamee} placeholder={namee} width={'40%'} onBlur={handleBlur} />

						<CurrencyInput
							precision={0}
							onChangeValue={setQuantityy}
							value={quantityy}
							placeholder={`${quantityy}`}
							keyboardType={'numeric'}
							onBlur={handleBlur}
							style={{
								...Platform.select({ web: { outline: 'none' } }),
								width: '20%',
								height: 30,
								textAlign: 'center',
								justifyContent: 'flex-start',
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
							onBlur={handleBlur}
							style={{
								...Platform.select({ web: { outline: 'none' } }),
								width: '20%',
								height: 30,
								textAlign: 'center',
								justifyContent: 'flex-start',
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
	const [titlee, setTitlee] = useState(title || '');
	const [update, setUpdate] = useState(false);

	return (
		<ButtonDelete
			update={update}
			setUpdate={setUpdate}
			id={id}
			Children={
				<Card id={id} onPress={() => navigation.navigate('itens')}>
					<KeyboardCol behavior="padding">
						<InputIten value={titlee} setValue={setTitlee} placeholder={titlee} width={'50%'} onBlur={handleBlur} />
					</KeyboardCol>
				</Card>
			}
		/>
	);
}
