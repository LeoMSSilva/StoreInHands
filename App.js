import React from 'react';
import { UserProvider } from './src/backend/contexts/user';
import Routes from './src/backend/routes';
import './src/backend/services/firebase';

const App = () => (
	<UserProvider>
		<Routes />
	</UserProvider>
);

export default App;
