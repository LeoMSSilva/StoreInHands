import React from 'react';
import {StatusBar, TouchableOpacity, View } from 'react-native';
import Colors from '../style/colors';
import styled from 'styled-components';
import { ListButton} from '../components/listButton';
export default function MyLists() {
	return (
		<SafeAreaView>
			<StatusBar></StatusBar>
			<TextHighLight>Listas</TextHighLight>
			<ScrollView>
				<ListButton></ListButton>
				<ListButton></ListButton>
				<ListButton></ListButton>
				<ListButton></ListButton>
				<ListButton></ListButton>
				<ListButton></ListButton>
				<ListButton></ListButton>
				<ListButton></ListButton>
				
			</ScrollView>
			<View>
				<CreateMore>
					<TextHighLight>+</TextHighLight>
				</CreateMore>
			</View>
		</SafeAreaView>
					
	);
}

const ScrollView = styled.ScrollView`
	max-height: 90%;

`;

const SafeAreaView = styled.SafeAreaView`
	padding: 50px 32px;
	background-color: ${Colors.myBackground};
`;
const TextHighLight = styled.Text`
	justify-content: center;
	font-family: 'Roboto';
	text-align: center;
	font-weight: 900;
	font-size: 28px;
	color: ${Colors.myDark};
	margin: 0;
	padding: 0;
`;

const CreateMore = styled.TouchableOpacity`
	margin-top: 15px;
`;