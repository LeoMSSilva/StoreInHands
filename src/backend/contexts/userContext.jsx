// import firebase from 'firebase';
// import 'firebase/auth';
// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext(null);

// export const UserProvider = ({ children }) => {
// 	const [user, setUser] = useState(null);

// 	const singUp = (email, password) => {
// 		firebase
// 			.auth()
// 			.createUserWithEmailAndPassword(email, password)
// 			.then((resp) => console.log(resp))
// 			.catch((e) => console.log(e));
// 	};

// 	const singIn = (email, password) => {
// 		firebase
// 			.auth()
// 			.signInWithEmailAndPassword(email, password)
// 			.then((resp) => console.log(resp))
// 			.catch((e) => console.log(e));
// 	};

// 	const singOut = () => {
// 		firebase
// 			.auth()
// 			.signOut()
// 			.then((resp) => console.log(resp))
// 			.catch((e) => console.log(e));
// 	};

// 	return (
// 		<UserContext.Provider value={{ user, setUser, singIn, singUp, singOut }}>
// 			{children}
// 		</UserContext.Provider>
// 	);
// }

// export function useUser() {
// 	const { user, setUser, singUp, singIn, singOut } = useContext(UserContext);
// 	return { user, setUser, singUp, singIn, singOut };
// }