import React from 'react';
import { InputField } from './style';

export function GrayInput({place, secure=false, type="default"}) {
	return <InputField placeholder={place} secureTextEntry={secure} keyboardType={type}></InputField>;
}
