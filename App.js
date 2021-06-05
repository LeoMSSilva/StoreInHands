import React from 'react';
import Routes from './src/backend/routes';
import Login from './src/frontend/pages/login';
import MyLists from './src/frontend/pages/myLists';
import { Container } from './src/frontend/style';

const App = () => (
	<Container>
		<MyLists></MyLists>
	</Container>
);

export default App;
