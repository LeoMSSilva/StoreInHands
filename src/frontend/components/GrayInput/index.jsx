import React from 'react';
import { InputField } from './style';

export function GrayInput({place, secure=false, type="default", oCT, value}) {
	console.warn(value)
	return <InputField placeholder={place} secureTextEntry={secure} keyboardType={type} onChangeText={oCT} value={value}></InputField>;
}
