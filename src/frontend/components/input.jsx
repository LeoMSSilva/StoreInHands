import React from 'react';
import styled from 'styled-components';
import Colors from '../colors';

const InputText = styled.input`
	border-bottom: Colors.myLight;
	height: 20;
	width: 100;
`;

export default function Input({ placeholder, type = 'text' }) {
	if (type == 'text') return <InputText placeholder={placeholder} />;
	else return <InputText placeholder={placeholder} />;
}
