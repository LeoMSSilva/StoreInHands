import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const {signIn, user} =  useContext(UsuarioContext);

// import Welcome from '../../frontend/pages/welcome';
import MyLists from '../../frontend/pages/myLists';
// import OneMyList from '../../frontend/pages/oneMyList';

const stackRoutes = createStackNavigator();

const InRoutes = () => (
	<stackRoutes.Navigator headerMode="none">
		{/* <stackRoutes.Screen name="welcome" component={Welcome} /> */}
		<stackRoutes.Screen name="myLists" component={MyLists} />
		{/* <stackRoutes.Screen name="oneList" component={OneMyList} /> */}
	</stackRoutes.Navigator>
);

export default InRoutes;


