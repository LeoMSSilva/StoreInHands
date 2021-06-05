import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, ScrollView, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, SubContainer, Card, TextoContainer, Title,  } from './styles';
import Colors from '../style/colors';

export default function MyLists()
{
	const comerces = [
    {
			id: 1,
      name: "Açougue",
    },
    {
			id: 2,
      name: "Hortifruti",
    },
    {
			id: 3,
      name: "Mercado",
    },
    {
			id: 4,
      name: "Padaria",
    },
    {
			id: 5,
      name: "Armazem",
    },
    {
			id: 6,
      name: "Mercearia",
    },
  ];

	return (
		<ScrollView>
			<Container>
				
				<Title> Listas </Title>	
					<SubContainer>
						<FlatList data={comerces}
											keyExtractor={(item) => item.id}
											renderItem={({ item }) => (
											<Card>
												<TextoContainer>{item.name}</TextoContainer>
											</Card>
						)}/>
					</SubContainer>

				<TouchableOpacity>
					<Ionicons name="add-outline" size={42} color={Colors.myDark} />		
      	</TouchableOpacity>
							
			</Container>
		</ScrollView>	
	
	);
}
