import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../frontend/style/colors';

import Splash from '../../frontend/pages/splash';
import Start from '../../frontend/pages/start';
import Login from '../../frontend/pages/login';
import Register from '../../frontend/pages/register';
import Welcome from '../../frontend/pages/welcome';
import MyLists from '../../frontend/pages/myLists';
import OneMyList from '../../frontend/pages/oneMyList';

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
	<stackRoutes.Navigator
		screenOptions={{
			title: 'Store In Hands',
			headerStyle: {
				backgroundColor: Colors.myDark,
			},
			headerTintColor: Colors.myBackground,
			headerTitleAlign: 'center',
			headerTransparent: false,
		}}
	>
		<stackRoutes.Screen name="splash" component={Splash} />
		<stackRoutes.Screen name="start" component={Start} />
		<stackRoutes.Screen name="login" component={Login} />
		<stackRoutes.Screen name="register" component={Register} />
		<stackRoutes.Screen name="welcome" component={Welcome} />
		<stackRoutes.Screen name="myLists" component={MyLists} />
		<stackRoutes.Screen name="oneList" component={OneMyList} />
	</stackRoutes.Navigator>
);

export default AppRoutes;
