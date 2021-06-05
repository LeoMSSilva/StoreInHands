import React from 'react';
import { TextBigDark, TextBigLight, TextLight, TitleDark } from './style';

export function Title({ text }) {
	return <TitleDark>{text}</TitleDark>;
}

export function TextBigBlue({ text }) {
	return <TextBigDark>{text}</TextBigDark>;
}

export function TextBig({ text }) {
	return <TextBigLight>{text}</TextBigLight>;
}

export function Text({ text }) {
	return <TextLight>{text}</TextLight>;
}
