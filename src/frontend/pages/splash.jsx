import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StatusBar } from 'react-native';
import Colors from '../styles/colors';
import { Container } from '../styles/index';
//@ts-ignore
import logo from '../imgs/splash.png';

export default function Splash({ navigation }) {
	useEffect(() => {
		setTimeout(() => navigation.navigate('login'), 2000);
	}, []);

	return (
		<Container>
			<StatusBar />
			<Image source={logo} style={{ width: 300, height: 300 }} />
			<ActivityIndicator color={Colors.myDark} size={30} style={{ marginTop: 50 }} />
		</Container>
	);
}
