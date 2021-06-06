import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UsuarioContext } from '../contexts/usuario';
import InRoutes from './in.routes';
import OutRoutes from './out.routes';


function Routes(){
	const { user } =  useContext(UsuarioContext);
	return (<NavigationContainer>
		{user ? <InRoutes /> : <OutRoutes />}
	</NavigationContainer>)
};

export default Routes;