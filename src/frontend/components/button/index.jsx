import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { handleDelete, handleUpdate } from '../../../backend/services/storage';
import Colors from '../../styles/colors';
import { ButtonIcon, ButtonMore, Card, CustonButton, TextButton } from './style';

export function Logout({ signOut }) {
	const [load, setLoad] = useState(false);
	return (
		<ButtonIcon
			activeOpacity={0.6}
			onPress={() => {
				setLoad(!load);
				setTimeout(() => {
					try {
						signOut();
						setLoad(false);
					} catch (e) {
						console.log(e);
					}
				}, 1000);
			}}
		>
			{load ? (
				<ActivityIndicator size={30} color={Colors.myDark} />
			) : (
				<Entypo name={'log-out'} size={30} color={Colors.myDark} />
			)}
		</ButtonIcon>
	);
}

export function Return({ onPress }) {
	return (
		<ButtonIcon onPress={onPress}>
			<Entypo name={'arrow-left'} size={30} color={Colors.myDark} />
		</ButtonIcon>
	);
}

export function More({ onPress }) {
	return (
		<ButtonMore onPress={onPress}>
			<Ionicons name="add-outline" size={42} color={Colors.myDark} />
		</ButtonMore>
	);
}

export function Button({ invert = false, text, onPress, load }) {
	return (
		<CustonButton invert={invert} disabled={load} activeOpacity={0.6} onPress={onPress}>
			{load ? <ActivityIndicator color={Colors.myWhite} /> : <TextButton invert={invert}>{text}</TextButton>}
		</CustonButton>
	);
}

export function ButtonDelete({ Children, id, update, setUpdate }) {
	const RightActions = (progress, dragX) => {
		const scale = dragX.interpolate({
			inputRange: [-100, 0],
			outputRange: [0.7, 0],
		});
		return (
			<>
				<TouchableOpacity activeOpacity={0.6} onPress={() => handleDelete(id)}>
					<View style={{ flex: 1, backgroundColor: Colors.myDelete, justifyContent: 'center' }}>
						<Animated.Text
							style={{ color: Colors.myWhite, paddingHorizontal: 10, fontWeight: '600', transform: [{ scale }] }}
						>
							<Feather name="trash" size={30} />
						</Animated.Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.6}
					onPress={() => {
						setUpdate(update);
						handleUpdate(id);
					}}
				>
					<View style={{ flex: 1, backgroundColor: Colors.myUpdate, justifyContent: 'center' }}>
						<Animated.Text
							style={{ color: Colors.myWhite, paddingHorizontal: 10, fontWeight: '600', transform: [{ scale }] }}
						>
							<Feather name="edit" size={30} />
						</Animated.Text>
					</View>
				</TouchableOpacity>
			</>
		);
	};

	return (
		<Swipeable overshootLeft={false} renderRightActions={RightActions}>
			{Children}
		</Swipeable>
	);
}
