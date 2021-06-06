import React from 'react';
import Routes from './src/backend/routes';
import Register from './src/frontend/pages/Register'
import Login from './src/frontend/pages/Login'
import MyLists from './src/frontend/pages/myLists';
import {UsuarioProvider} from './src/backend/contexts/usuario'

import './src/backend/services/firebase';
const App = () => (
	<UsuarioProvider>
		<Routes></Routes>
		{/* <Register></Register> */}
	</UsuarioProvider>
);

export default App;
