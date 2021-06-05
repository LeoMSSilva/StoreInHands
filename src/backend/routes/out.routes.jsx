import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../frontend/pages/splash';
import Start from '../../frontend/pages/start';
import Login from '../../frontend/pages/login';
import Register from '../../frontend/pages/register';

const stackRoutes = createStackNavigator();

const OutRoutes = () => (
	<stackRoutes.Navigator headerMode="none">
		<stackRoutes.Screen name="splash" component={Splash} />
		<stackRoutes.Screen name="start" component={Start} />
		<stackRoutes.Screen name="login" component={Login} />
		<stackRoutes.Screen name="register" component={Register} />
	</stackRoutes.Navigator>
);

export default OutRoutes;