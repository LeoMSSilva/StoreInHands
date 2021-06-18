import React, { useEffect } from 'react';
<<<<<<< HEAD
import { ActivityIndicator, Image } from 'react-native';
import logo from '../imgs/splash.png';
import Colors from '../style/colors';
import { Container } from '../style/index';

export default function Splash({ navigation }) {
	useEffect(() => {
		setTimeout(() => navigation.navigate('start'), 1000);
	}, []);

	return (
		<Container>
			<Image source={logo} style={{ width: 500, height: 500 }} />
			<ActivityIndicator color={Colors.myDark} size="large" style={{ marginTop: 20 }} />
=======
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
>>>>>>> origin/develop
		</Container>
	);
}
