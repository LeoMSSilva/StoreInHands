import React, { useContext } from 'react';
import { UserContext } from '../contexts/user';
import { NavigationContainer } from '@react-navigation/native';
import InRoutes from './in.routes';
import OutRoutes from './out.routes';

function Routes() {
	//@ts-ignore
	const { user }  = useContext(UserContext);
	
	return (
		<NavigationContainer>
			{user ? <InRoutes /> : <OutRoutes />}
		</NavigationContainer>
	);
}

export default Routes;
