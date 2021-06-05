import styled from 'styled-components/native';
import Colors from '../../style/colors';

export const InputField = styled.TextInput.attrs({
	placeholderTextColor: '#ccc',
	
})`
	text-align: center;
	border-bottom-color: #ccc;
    border-bottom-width: 1px;
    color: #ccc;
	height: 50px;
	padding: 0px 20px;
	margin-top: 30px;
    width: 300px;
`;
