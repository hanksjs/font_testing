import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, Icon, Footer } from "native-base";
import { View } from 'react-native'
import { StyleSheet }from 'react-native'

//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<View>
				<Text style={styles.fontTest}>Font Test</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fontTest: {
		fontSize: 100,
		fontFamily: Platform.OS === 'android'?"Knockout-53":"Knockout-53Heviweight"
	}
})

export default Login;
