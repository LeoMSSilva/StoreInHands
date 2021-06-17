import React, { createContext, useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { listen, signIn, signUp } from '../services/auth';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [load, setLoad] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const access = (access) => {
		setLoad(true);
		setTimeout(() => {
			try {
				setEmail('');
				setPassword('');
				setLoad(false);
				Keyboard.dismiss();
				access();
			} catch (e) {
				console.log(e);
			}
		}, 1000);
	};

	const handleSignIn = async () => access(signIn(email, password));

	const handleSignUp = async () => access(signUp(email, password));

	const listenAuth = (userState) => setUser(userState);

	useEffect(() => listen(listenAuth), []);

	return (
		<UserContext.Provider
			value={{
				user,
				load,
				email,
				password,
				setEmail,
				setPassword,
				handleSignIn,
				handleSignUp,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
