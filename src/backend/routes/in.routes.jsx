import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Logout, Return } from '../../frontend/components/button';
import { signOut } from '../services/auth';
import Welcome from '../../frontend/pages/welcome';
import Lists from '../../frontend/pages/lists';
import Itens from '../../frontend/pages/itens';

const stackRoutes = createStackNavigator();

const screenOptions = {
	title: '',
	headerTransparent: true,
};

const InRoutes = () => (
	<stackRoutes.Navigator screenOptions={screenOptions}>
		<stackRoutes.Screen name="welcome" component={Welcome} />
		<stackRoutes.Screen
			name="lists"
			component={Lists}
			options={() => ({
				headerRight: () => <Logout signOut={signOut} />,
				headerLeft: () => <></>,
			})}
		/>
		<stackRoutes.Screen
			name="itens"
			component={Itens}
			options={({ navigation }) => ({
				headerRight: () => <Logout signOut={signOut} />,
				headerLeft: () => <Return onPress={() => navigation.goBack()} />,
			})}
		/>
	</stackRoutes.Navigator>
);

export default InRoutes;
