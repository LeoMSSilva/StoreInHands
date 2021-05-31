import React, { useEffect } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import logo from '../imgs/splash.png';
import Colors from '../colors';

export default function Splash({ navigation }) {
	useEffect(() => {
		setTimeout(() => navigation.navigate('start'), 1000);
	}, []);

	return (
		<>
			<Image source={logo} style={{ width: 500, height: 500 }} />
			<ActivityIndicator color={Colors.myDark} size="large" style={{ marginTop: 20 }} />
		</>
	);
}
