import React from 'react';
import styled from 'styled-components';
import Colors from '../colors';

const CustonButtonBigDark = styled.text`
	color: Colors.myDark;
	font-size: 18;
	font-weight: bold;
`;

const CustonButtonBigLight = styled.text`
	color: Colors.myLight;
	font-size: 18;
`;

const CustonButtonMediumLight = styled.text`
	color: Colors.myLight;
	font-size: 14;
	font-weight: normal;
`;

export default function Text({ text, size = 'medium', color = 'light' }) {
	if (size == 'big')
		if (color == 'dark') return <CustonButtonBigDark>{text}</CustonButtonBigDark>;
		else return <CustonButtonBigLight>{text}</CustonButtonBigLight>;
	else return <CustonButtonMediumLight>{text}</CustonButtonMediumLight>;
}
