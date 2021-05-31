import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export default function UserProvider({ children }) {
	const [user, setUser] = useState(0);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const { user, setUser } = useContext(UserContext);
	return { user, setUser };
}
