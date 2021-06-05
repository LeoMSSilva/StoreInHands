import React from 'react';
import { Button, TextButton } from './style';

export function ButtonBlue({ children }) {
	return (
		<Button>
			<TextButton> {children}</TextButton>
		</Button>
	);
}
