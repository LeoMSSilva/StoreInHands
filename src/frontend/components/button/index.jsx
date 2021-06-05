import React from 'react';
import Colors from '../../style/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ButtonText, CustonButton, CustonButtonDelete } from './style';

export function Button({ text, click }) {
	return (
		<CustonButton onPress={click}>
			<ButtonText>{text}</ButtonText>
		</CustonButton>
	);
}

export function ButtonDelete({ click }) {
	return (
		<Swipeable
			overshootRight={false}
			renderLeftActions={() => (
				<Animated.View>
					<View>
						<CustonButtonDelete>
							<Feather name="trash" color={Colors.myWhite} style={{ fontSize: 20 }} />
						</CustonButtonDelete>
					</View>
				</Animated.View>
			)}
		/>
	);
}
