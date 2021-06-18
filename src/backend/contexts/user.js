import React, { createContext, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { listen, signIn, signOut, signUp } from '../services/auth';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [load, setLoad] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [lists, setLists] = useState([]);

	const access = (access, out = false) => {
		setLoad(true);
		setTimeout(() => {
			try {
				if (!out) {
					setEmail('');
					setPassword('');
					Keyboard.dismiss();
				}
				setLoad(false);
				access;
			} catch (e) {
				console.log(e);
			}
		}, 1000);
	};

	const handleSignIn = async () => access(signIn(email, password));

	const handleSignUp = async () => access(signUp(email, password));

	const handleSignOut = async () => access(signOut(), true);

	const listenAuth = (userState) => setUser(userState);

	useEffect(() => listen(listenAuth), []);

	return (
		<UserContext.Provider
			value={{
				user,
				load,
				email,
				password,
				lists,
				setLists,
				setEmail,
				setPassword,
				handleSignIn,
				handleSignUp,
				handleSignOut,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
