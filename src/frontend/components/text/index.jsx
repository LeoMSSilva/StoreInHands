import React from 'react';
import { TextBigDark, TextBigLight, TextLight, TitleBlue, Tags } from './style';

export function Title({ text }) {
	return <TitleBlue>{text}</TitleBlue>;
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

export function Tag({ text }) {
	return <Tags>{text}</Tags>;
}
