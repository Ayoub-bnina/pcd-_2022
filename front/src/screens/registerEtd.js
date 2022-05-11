import React from 'react';
import axios from 'axios';
import { SafeAreaView, ScrollView, View } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { registerStyle } from "./registerStyle";





export default class PersonList2 extends React.Component {
    state = {
        id: '',
        login: '',
        mdp: '',
    }




    handleChangeid = event => {
        this.setState({ id: event.target.value });
    }
    handleChangelogin = event => {
        this.setState({ login: event.target.value });
    }
    handleChangemdp = event => {
        this.setState({ mdp: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const etudiant = {
            id: this.state.id,
            login: this.state.login,
            mdp: this.state.mdp
        };

        axios.post(`http://localhost:5700/api/v1/etudiant`, etudiant)
            .then(res => {
                alert(" student added successfully");
                console.log(res);
                console.log(res.data);

            })
    }

    render() {




        return (

            <SafeAreaView>
                <ScrollView>
                    <Appbar>
                        <Appbar.BackAction onPress={() => this.props.navigation.navigate("loginEt")} />
                        <Appbar.Content title="Register" />
                    </Appbar>


                    <View style={registerStyle.content}>



                        
                        <TextInput label="Login" onChange={this.handleChangelogin} />
                        <TextInput label="Password" secureTextEntry={true} onChange={this.handleChangemdp} />

                        <Button mode="contained" style={registerStyle.button} onPress={this.handleSubmit}  >Add</Button>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}
