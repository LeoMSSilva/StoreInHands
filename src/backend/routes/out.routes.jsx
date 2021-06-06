import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../../frontend/pages/Login';
// import Register from '../../frontend/pages/register';

const stackRoutes = createStackNavigator();

const OutRoutes = () => (
	<stackRoutes.Navigator headerMode="none">

		<stackRoutes.Screen name="login" component={Login} />
		{/* <stackRoutes.Screen name="register" component={Register} /> */}
	</stackRoutes.Navigator>
);

export default OutRoutes;