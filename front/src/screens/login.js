import React, { useState } from 'react';
import { View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './loginStyle';
import axios from "axios"

export default function LoginScreen({ navigation }) {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    // () =>  navigation.navigate("Home")

    function Login() {

        if (login != "" && password != "") {

            const data = {
                login: login,
                password: password
            }

            axios.post("http://localhost:5700/api/v1/administrateur/login", data).then(res => {
                if (res.data.error) {
                    alert("informations incorrects")
                }
                else {

                    navigation.navigate("roleAdmin")

                }

            }).catch(err => {
                console.log(err)
            })


        }


    }
        return (
            <ImageBackground
                source={require('../images/backgroundAccueil.jpg')}
                style={{ width: "100%", height: "100%" }}
            ><SafeAreaView style={loginStyle.content}>


        <View style={loginStyle.View}>
                    <Card >
                        <Card.Content>
                            <Card.Title title="Welcome to Learn EZ" titleStyle={loginStyle.cardTitle}></Card.Title>
                            <TextInput label="Login" onChange={(e) => setLogin(e.target.value)} ></TextInput>
                            <TextInput label="Password" secureTextEntry={true} onChange={(e) => setPassword(e.target.value)}></TextInput>
                            <Button mode="contained" onPress={() => Login()}>Login</Button>
                            <Button onPress={() => navigation.navigate("register")}>Register</Button>
                        </Card.Content>

                    </Card>
                </View>
                </SafeAreaView>
            </ImageBackground >

        )
    }
