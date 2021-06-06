import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// // import { useUser } from '../contexts/userContext';
import InRoutes from './in.routes';
import OutRoutes from './out.routes';

// // const { user } = useUser();

const Routes = () => (
	<NavigationContainer>
		{false ? <InRoutes /> : <OutRoutes />}
	</NavigationContainer>
);

export default Routes;