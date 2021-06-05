import React, { createContext, useContext, useState } from 'react';

const ListContext = createContext(null);

export default function ListProvider({ children }) {
	const [list, setList] = useState(0);
	return (
		<ListContext.Provider value={{ list, setList }}>
			{children}
		</ListContext.Provider>
	);
}

export function useList() {
	const { list, setList } = useContext(ListContext);
	return { list, setList };
}
