import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../frontend/pages/splash';
import Login from '../../frontend/pages/login';
import Register from '../../frontend/pages/register';

const stackRoutes = createStackNavigator();

const screenOptions = {
	title: '',
	headerTransparent: true,
};

const OutRoutes = () => (
	<stackRoutes.Navigator screenOptions={screenOptions}>
		<stackRoutes.Screen
			name="splash"
			component={Splash}
			options={() => ({
				headerRight: () => <></>,
				headerLeft: () => <></>,
			})}
		/>
		<stackRoutes.Screen
			name="login"
			component={Login}
			options={() => ({
				headerRight: () => <></>,
				headerLeft: () => <></>,
			})}
		/>
		<stackRoutes.Screen
			name="register"
			component={Register}
			options={() => ({
				headerRight: () => <></>,
				headerLeft: () => <></>,
			})}
		/>
	</stackRoutes.Navigator>
);

export default OutRoutes;
