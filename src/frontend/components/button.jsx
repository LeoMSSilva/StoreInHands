import React from 'react';
import styled from 'styled-components';
import Colors from '../colors';
import { useNavigation } from '@react-navigation/core';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CustonButton = styled.button`
	color: Colors.myDark;
	height: 40;
	width: 100;
`;

const CustonButtonDelete = styled.button`
	color: Colors.myDelete;
	height: 20;
	width: 100;
`;

const ButtonText = styled.text`
	color: Colors.myWhite;
	font-size: 16;
`;

export default function Button({ text = '', click, type }) {
	if (type == 'Delete')
		return (
			<Swipeable
				overshootRight={false}
				renderLeftActions={() => (
					<Animated.View>
						<View>
							<CustonButtonDelete>
								<Feather name="trash" size={32} color={Colors.myWhite} />
							</CustonButtonDelete>
						</View>
					</Animated.View>
				)}
			/>
		);
	else
		return (
			<CustonButton onClick={click} activeOpacity={0.6}>
				<ButtonText>{text}</ButtonText>
			</CustonButton>
		);
}
