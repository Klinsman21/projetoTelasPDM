// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Olá mundo</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     // flex: 1,
//     justifyContent: "center",
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     backgroundColor: 'rgba(255, 148, 0, 1)',
//     width: 428,
//     height: 442,
//     left: 0,
//     top: 0,
//   },
//   title: {
//     position: "relative",
//     top: 80,
//     textAlign: "center",
//     fontSize: 36,

//   }
// });

import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

import {
useFonts,
} from "@expo-google-fonts/dev";

export default function App (){

	let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Card_pio}>
			<View style = {stylesheet._Card_06___Texas_Burger___c_pia__}>
				<View style = {stylesheet._bg}>
				</View>
				<View style = {[stylesheet._R__25_50, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._R__25_50, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					R$ 25,50
				</Text>
				</View>
				<View style = {[stylesheet._Texas_Burger, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Texas_Burger, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Texas Burger
				</Text>
				</View>
				<View style = {[stylesheet._Tradicional, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Tradicional, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Tradicional
				</Text>
				</View>
				<View style = {stylesheet._bg___banner}>
				</View>
				<Image style = {stylesheet._img___Texas_Burger} source = {{uri: imageUrl_img___Texas_Burger}}>
				</Image>
			</View>
			<View style = {stylesheet._Card_05___Golden_Burger___c_pia__}>
				<View style = {stylesheet._bg_2}>
				</View>
				<View style = {[stylesheet._R__25_50_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._R__25_50_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					R$ 25,50
				</Text>
				</View>
				<View style = {[stylesheet._Golden_Burger, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Golden_Burger, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Golden Burger
				</Text>
				</View>
				<View style = {[stylesheet._Tradicional_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Tradicional_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Tradicional
				</Text>
				</View>
				<View style = {stylesheet._bg___banner_2}>
				</View>
				<Image style = {stylesheet._img___Golden_Burger} source = {{uri: imageUrl_img___Golden_Burger}}>
				</Image>
			</View>
			<View style = {stylesheet._Card_04___Old_Burger}>
				<View style = {stylesheet._bg_3}>
				</View>
				<View style = {[stylesheet._R__25_50_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._R__25_50_3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					R$ 25,50
				</Text>
				</View>
				<View style = {[stylesheet._Old_Burger, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Old_Burger, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Old Burger
				</Text>
				</View>
				<View style = {[stylesheet._Tradicional_3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Tradicional_3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Tradicional
				</Text>
				</View>
				<View style = {stylesheet._bg___banner_3}>
				</View>
				<Image style = {stylesheet._img___Old_Burger} source = {{uri: imageUrl_img___Old_Burger}}>
				</Image>
			</View>
			<View style = {stylesheet._Card_03___Monster_Burger}>
				<View style = {stylesheet._bg_4}>
				</View>
				<View style = {[stylesheet._R__25_50_4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._R__25_50_4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					R$ 25,50
				</Text>
				</View>
				<View style = {[stylesheet._Monster_Burger, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Monster_Burger, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Monster Burger
				</Text>
				</View>
				<View style = {[stylesheet._Tradicional_4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Tradicional_4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Tradicional
				</Text>
				</View>
				<View style = {stylesheet._bg___banner_4}>
				</View>
				<Image style = {stylesheet._img___Monster_Burger} source = {{uri: imageUrl_img___Monster_Burger}}>
				</Image>
			</View>
			<View style = {stylesheet._Card_02___Golden_Burger}>
				<View style = {stylesheet._bg_5}>
				</View>
				<View style = {[stylesheet._R__25_50_5, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._R__25_50_5, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					R$ 25,50
				</Text>
				</View>
				<View style = {[stylesheet._Golden_Burger_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Golden_Burger_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Golden Burger
				</Text>
				</View>
				<View style = {[stylesheet._Tradicional_5, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Tradicional_5, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Tradicional
				</Text>
				</View>
				<View style = {stylesheet._bg___banner_5}>
				</View>
				<Image style = {stylesheet._img___Golden_Burger_2} source = {{uri: imageUrl_img___Golden_Burger_2}}>
				</Image>
			</View>
			<View style = {stylesheet._Card_01___Texas_Burger}>
				<View style = {stylesheet._bg_6}>
				</View>
				<View style = {[stylesheet._R__25_50_6, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._R__25_50_6, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					R$ 25,50
				</Text>
				</View>
				<View style = {[stylesheet._Texas_Burger_2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Texas_Burger_2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Texas Burger
				</Text>
				</View>
				<View style = {[stylesheet._Tradicional_6, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Tradicional_6, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Tradicional
				</Text>
				</View>
				<View style = {stylesheet._bg___banner_6}>
				</View>
				<Image style = {stylesheet._img___Texas_Burger_2} source = {{uri: imageUrl_img___Texas_Burger_2}}>
				</Image>
			</View>
			<View style = {stylesheet._banner___promo__o_01}>
				<View style = {stylesheet._Rectangle_116}>
				</View>
				<View style = {stylesheet._Rectangle_118}>
				</View>
				<Image style = {stylesheet._Card_burger_3_2} source = {{uri: imageUrl_Card_burger_3_2}}>
				</Image>
				<View style = {stylesheet._Rectangle_117}>
				</View>
				<View style = {[stylesheet._Promo__o, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Promo__o, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Promoção
				</Text>
				</View>
				<Image style = {stylesheet._Card_burger_3_1} source = {{uri: imageUrl_Card_burger_3_1}}>
				</Image>
				<View style = {[stylesheet._Dose_Dupla_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Dose_Dupla_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Dose Dupla.
				</Text>
				</View>
				<View style = {[stylesheet._R__35_50, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._R__35_50, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					R$ 35,50
				</Text>
				</View>
				<View style = {[stylesheet._2_Old_Burger_por_apenas_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._2_Old_Burger_por_apenas_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					2 Old Burger por apenas:
				</Text>
				</View>
			</View>
			<View style = {stylesheet._bg___header}>
			</View>
			<View style = {stylesheet._input___search}>
				<View style = {stylesheet._Rectangle_66}>
				</View>
				<View style = {stylesheet._Rectangle_59}>
				</View>
				<View style = {[stylesheet._Digite_o_nome_do_Burger, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Digite_o_nome_do_Burger, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Digite o nome do Burger
				</Text>
				</View>
				<View style = {stylesheet._Frame}>
					<Svg style = {stylesheet._Vector} fill = {"rgba(0,0,0,0)"}>
					<Path fillRule = {"nonzero"} d = {"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
					<Svg style = {stylesheet._Vector_2} fill = {"rgba(251, 148, 0, 1)"}>
					<Path fillRule = {"nonzero"} d = {"M 16.0310001373291 14.617000579833984 L 20.31399917602539 18.89900016784668 L 18.89900016784668 20.31399917602539 L 14.617000579833984 16.0310001373291 C 13.023738861083984 17.308221220970154 11.042001008987427 18.002905188361183 9 18 C 4.0320000648498535 18 0 13.967999935150146 0 9 C 0 4.0320000648498535 4.0320000648498535 0 9 0 C 13.967999935150146 0 18 4.0320000648498535 18 9 C 18.002905188361183 11.042001008987427 17.308221220970154 13.023738861083984 16.0310001373291 14.617000579833984 Z M 14.024999618530273 13.875 C 15.29411256313324 12.569885611534119 16.002867009025067 10.82042932510376 16 9 C 16.000000000000004 5.131999969482422 12.867000102996826 2 9 2 C 5.131999969482422 2 2 5.131999969482422 2 9 C 2 12.867000102996826 5.131999969482422 16 9 16 C 10.82042932510376 16.002867009025067 12.569885611534119 15.29411256313324 13.875 14.024999618530273 L 14.024999618530273 13.875 L 14.024999618530273 13.875 Z"}   strokeLinejoin = {"miter"}/>
					</Svg>
				</View>
			</View>
			<View style = {[stylesheet._O_que_deseja_pra_hoje_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._O_que_deseja_pra_hoje_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				O que deseja pra hoje?
			</Text>
			</View>
			<View style = {stylesheet._btn___menu}>
				<Svg style = {stylesheet._Vector_3} fill = {"rgba(0,0,0,0)"}>
				<Path fillRule = {"nonzero"} d = {"M 0 0 L 24 0 L 24 24 L 0 24 L 0 0 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
				<Svg style = {stylesheet._Vector_4} fill = {"rgba(251, 148, 0, 1)"}>
				<Path fillRule = {"nonzero"} d = {"M 0 0 L 18 0 L 18 2 L 0 2 L 0 0 Z M 0 7 L 18 7 L 18 9 L 0 9 L 0 7 Z M 0 14 L 18 14 L 18 16 L 0 16 L 0 14 Z"}   strokeLinejoin = {"miter"}/>
				</Svg>
			</View>
			<View style = {[stylesheet.___, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet.___, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				👋
			</Text>
			</View>
			<View style = {[stylesheet._Seja_Bem_Vindo, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Seja_Bem_Vindo, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Seja Bem-Vindo
			</Text>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_Card_pio: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 926,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	_Card_06___Texas_Burger___c_pia__: {
		position: "absolute",
		width: 178,
		height: 178,
		transform: [
			{translateX: 226},
			{translateY: 886},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_bg: {
		position: "absolute",
		width: 178,
		height: 178,
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 40,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_R__25_50: {
		position: "absolute",
		width: 69,
		height: 15,
		left: 13,
		right: "auto",
		top: 147,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(251, 148, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Texas_Burger: {
		position: "absolute",
		width: 120,
		height: 20,
		left: 13,
		right: "auto",
		top: 124,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Tradicional: {
		position: "absolute",
		width: 43,
		height: 10,
		left: 13,
		right: "auto",
		top: 111,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 8,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bg___banner: {
		position: "absolute",
		width: 178,
		height: 89,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 249, 242, 1)",
	},
	_img___Texas_Burger: {
		position: "absolute",
		width: 106,
		height: 120,
		borderRadius: 0,
		opacity: 1,
		left: 36,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Card_05___Golden_Burger___c_pia__: {
		position: "absolute",
		width: 178,
		height: 178,
		transform: [
			{translateX: 24},
			{translateY: 886},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_bg_2: {
		position: "absolute",
		width: 178,
		height: 178,
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 40,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_R__25_50_2: {
		position: "absolute",
		width: 69,
		height: 15,
		left: 13,
		right: "auto",
		top: 147,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(251, 148, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Golden_Burger: {
		position: "absolute",
		width: 129,
		height: 20,
		left: 13,
		right: "auto",
		top: 124,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Tradicional_2: {
		position: "absolute",
		width: 43,
		height: 10,
		left: 13,
		right: "auto",
		top: 111,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 8,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bg___banner_2: {
		position: "absolute",
		width: 178,
		height: 89,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 249, 242, 1)",
	},
	_img___Golden_Burger: {
		position: "absolute",
		width: 119,
		height: 119,
		borderRadius: 0,
		opacity: 1,
		left: 23,
		right: "auto",
		top: 2,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Card_04___Old_Burger: {
		position: "absolute",
		width: 178,
		height: 178,
		transform: [
			{translateX: 226},
			{translateY: 684},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_bg_3: {
		position: "absolute",
		width: 178,
		height: 178,
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 40,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_R__25_50_3: {
		position: "absolute",
		width: 69,
		height: 15,
		left: 13,
		right: "auto",
		top: 147,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(251, 148, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Old_Burger: {
		position: "absolute",
		width: 120,
		height: 20,
		left: 13,
		right: "auto",
		top: 124,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Tradicional_3: {
		position: "absolute",
		width: 43,
		height: 10,
		left: 13,
		right: "auto",
		top: 111,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 8,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bg___banner_3: {
		position: "absolute",
		width: 178,
		height: 89,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 249, 242, 1)",
	},
	_img___Old_Burger: {
		position: "absolute",
		width: 115,
		height: 115,
		borderRadius: 0,
		opacity: 1,
		left: 27,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Card_03___Monster_Burger: {
		position: "absolute",
		width: 178,
		height: 178,
		transform: [
			{translateX: 24},
			{translateY: 684},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_bg_4: {
		position: "absolute",
		width: 178,
		height: 178,
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 40,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_R__25_50_4: {
		position: "absolute",
		width: 69,
		height: 15,
		left: 13,
		right: "auto",
		top: 147,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(251, 148, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Monster_Burger: {
		position: "absolute",
		width: 141,
		height: 20,
		left: 13,
		right: "auto",
		top: 124,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Tradicional_4: {
		position: "absolute",
		width: 43,
		height: 10,
		left: 13,
		right: "auto",
		top: 111,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 8,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bg___banner_4: {
		position: "absolute",
		width: 178,
		height: 89,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 249, 242, 1)",
	},
	_img___Monster_Burger: {
		position: "absolute",
		width: 141,
		height: 118,
		borderRadius: 0,
		opacity: 1,
		left: 18,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Card_02___Golden_Burger: {
		position: "absolute",
		width: 178,
		height: 178,
		transform: [
			{translateX: 226},
			{translateY: 482},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_bg_5: {
		position: "absolute",
		width: 178,
		height: 178,
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 40,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_R__25_50_5: {
		position: "absolute",
		width: 69,
		height: 15,
		left: 13,
		right: "auto",
		top: 147,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(251, 148, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Golden_Burger_2: {
		position: "absolute",
		width: 133,
		height: 20,
		left: 13,
		right: "auto",
		top: 124,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Tradicional_5: {
		position: "absolute",
		width: 43,
		height: 10,
		left: 13,
		right: "auto",
		top: 111,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 8,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bg___banner_5: {
		position: "absolute",
		width: 178,
		height: 89,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 249, 242, 1)",
	},
	_img___Golden_Burger_2: {
		position: "absolute",
		width: 119,
		height: 119,
		borderRadius: 0,
		opacity: 1,
		left: 30,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Card_01___Texas_Burger: {
		position: "absolute",
		width: 178,
		height: 178,
		transform: [
			{translateX: 24},
			{translateY: 482},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_bg_6: {
		position: "absolute",
		width: 178,
		height: 178,
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 40,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_R__25_50_6: {
		position: "absolute",
		width: 69,
		height: 15,
		left: 13,
		right: "auto",
		top: 147,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(251, 148, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Texas_Burger_2: {
		position: "absolute",
		width: 120,
		height: 20,
		left: 13,
		right: "auto",
		top: 124,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Tradicional_6: {
		position: "absolute",
		width: 43,
		height: 10,
		left: 13,
		right: "auto",
		top: 111,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 8,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bg___banner_6: {
		position: "absolute",
		width: 178,
		height: 89,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 0,
		borderBottomLeftRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 249, 242, 1)",
	},
	_img___Texas_Burger_2: {
		position: "absolute",
		width: 106,
		height: 120,
		borderRadius: 0,
		opacity: 1,
		left: 36,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_banner___promo__o_01: {
		position: "absolute",
		width: 380,
		height: 190,
		transform: [
			{translateX: 24},
			{translateY: 268},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_116: {
		position: "absolute",
		width: 380,
		height: 190,
		borderRadius: 8,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.07999999821186066,
		shadowRadius: 40,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_118: {
		position: "absolute",
		width: 111,
		height: 190,
		borderRadius: 8,
		opacity: 1,
		left: 269,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(251, 151, 7, 1)",
	},
	_Card_burger_3_2: {
		position: "absolute",
		width: 161,
		height: 161,
		borderRadius: 0,
		opacity: 1,
		left: 200,
		right: "auto",
		top: 12,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: -8,
			height: 0,
		},
		shadowOpacity: 0.10000000149011612,
		shadowRadius: 40,
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_117: {
		position: "absolute",
		width: 63,
		height: 22,
		borderRadius: 4,
		opacity: 1,
		left: 23,
		right: "auto",
		top: 24,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(251, 148, 0, 1)",
	},
	_Promo__o: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 30,
		right: "auto",
		top: 29,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(249, 249, 251, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Card_burger_3_1: {
		position: "absolute",
		width: 118,
		height: 171,
		borderRadius: 0,
		opacity: 1,
		left: 262,
		right: "auto",
		top: 12,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		shadowColor: "rgb(0, 0, 0)",
		shadowOffset: {
			width: -8,
			height: 0,
		},
		shadowOpacity: 0.14000000059604645,
		shadowRadius: 40,
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Dose_Dupla_: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 23,
		right: "auto",
		top: 55,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Calistoga",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 34,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_R__35_50: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 23,
		right: "auto",
		top: 116,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 32,
		color: "rgba(251, 148, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_2_Old_Burger_por_apenas_: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 23,
		right: "auto",
		top: 100,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 10,
		color: "rgba(106, 125, 139, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_bg___header: {
		position: "absolute",
		width: 428,
		height: 243,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(249, 249, 251, 1)",
	},
	_input___search: {
		position: "absolute",
		width: 380,
		height: 60,
		transform: [
			{translateX: 24},
			{translateY: 153},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_66: {
		position: "absolute",
		width: 380,
		height: 60,
		borderRadius: 5,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Rectangle_59: {
		position: "absolute",
		width: 48,
		height: 48,
		borderRadius: 5,
		opacity: 1,
		left: 6,
		right: "auto",
		top: 6,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(249, 249, 251, 1)",
	},
	_Digite_o_nome_do_Burger: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 67,
		right: "auto",
		top: 13,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		lineHeight: 33.599998474121094,
		fontSize: 16,
		color: "rgba(151, 151, 151, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Frame: {
		position: "absolute",
		width: 24,
		height: 24,
		borderRadius: 0,
		overflow: "hidden",
		left: 18,
		right: "auto",
		top: 18,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 24,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Vector_2: {
		position: "absolute",
		color: "rgba(251, 148, 0, 1)",
		width: "auto",
		height: 20.31399917602539,
		borderRadius: 0,
		left: 2,
		right: 1.6860008239746094,
		transform: [
			{translateX: 0},
			{translateY: 2},
			{rotate: "0deg"},
		],
	},
	_O_que_deseja_pra_hoje_: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 24,
		right: "auto",
		top: 107,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(151, 151, 151, 0.800000011920929)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_btn___menu: {
		position: "absolute",
		width: 24,
		height: 24,
		borderRadius: 0,
		overflow: "hidden",
		left: 380,
		right: "auto",
		top: 72,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
	},
	_Vector_3: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: "auto",
		height: 24,
		borderRadius: 0,
		left: 0,
		right: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	_Vector_4: {
		position: "absolute",
		color: "rgba(251, 148, 0, 1)",
		width: "auto",
		height: 16,
		borderRadius: 0,
		left: 3,
		right: 3,
		transform: [
			{translateX: 0},
			{translateY: 4},
			{rotate: "0deg"},
		],
	},
	___: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 210,
		right: "auto",
		top: 71,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Seja_Bem_Vindo: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 22,
		right: "auto",
		top: 70,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
});

const imageUrl_img___Texas_Burger = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/b353cf8a0844b54d2b9525416fa1f4d7"
const imageUrl_img___Golden_Burger = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/d542798557b5cd764769414e7c1183d6"
const imageUrl_img___Old_Burger = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/256e045b3e048bb25b570af99c7d0553"
const imageUrl_img___Monster_Burger = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/bce89d0530bdb0a198c2da5b8fdc4996"
const imageUrl_img___Golden_Burger_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e871c4e8626efb1682b1cce44fdc0eec"
const imageUrl_Card_burger_3_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/27bc1ec8dd156ec56b6b92c8a4f1999c"
const imageUrl_Card_burger_3_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/a243296f6295e9f06cf02b276810b0ce"
const imageUrl_img___Texas_Burger_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/68d5b303aaec39c61949a5db2223b1d0"
