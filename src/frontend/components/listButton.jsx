import React from 'react';
import { TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Colors from '../style/colors';

export function ListButton({value='lista1'}) {
	return (
        <TouchableOpacity>
            <Box>
                <TextButton>{value}</TextButton>
            </Box>
        </TouchableOpacity>
					
	);
}


const Box = styled.View`
    background-color: ${Colors.myDark};
    text-align: center;
    padding: 30px 20px;
    border-radius: 20px;
    margin: 10px;

`;

const TextButton = styled.Text`
    color: ${Colors.myWhite};
    text-align: center;
    font-size: 20px;
`;
