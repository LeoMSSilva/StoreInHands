import React from 'react';
import { Platform } from 'react-native';
import { TextInput, ItenInput } from './style';

export function InputText({ placeholder, setValue, value, password = false, keyboardType = 'defult' }) {
	return (
		<TextInput
			placeholder={placeholder}
			secureTextEntry={password}
			keyboardType={keyboardType}
			onChangeText={(value) => setValue(value)}
			value={value}
			style={{ ...Platform.select({ web: { outline: 'none' } }) }}
		/>
	);
}

export function InputIten({ placeholder, setValue, value, width }) {
	return (
		<ItenInput
			placeholder={placeholder}
			onChangeText={setValue}
			value={value}
			keyboardType='default'
			style={{ ...Platform.select({ web: { outline: 'none' } }), width: width }}
		/>
	);
}
