import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {UsuarioContext } from '../contexts/usuario';
import InRoutes from './in.routes';
import OutRoutes from './out.routes';

// const {user} =  useContext(UsuarioContext);

const Routes = () => (
	<NavigationContainer>
		{false ? <InRoutes /> : <OutRoutes />}
	</NavigationContainer>
);

export default Routes;