import React from 'react';
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

const Container = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SignIn = () => (
	<SafeAreaView>
		<Container>
			<Text>some logo</Text>
		</Container>
	</SafeAreaView>
)