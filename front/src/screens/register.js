import React from 'react';
import axios from 'axios';
import { SafeAreaView, ScrollView, View } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { registerStyle } from "./registerStyle";





export default class PersonList3 extends React.Component {
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

    handleSubmit  = event => {
        

        const administrateur = {
            id: this.state.id,
            login: this.state.login,
            mdp: this.state.mdp
        };

        console.log(administrateur)

        axios.post(`http://localhost:5700/api/v1/administrateur`, administrateur)
        .then(res => {
            alert(" admin added successfully");
          console.log(res);
          console.log(res.data);
  
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Appbar>
                        <Appbar.BackAction onPress={() => this.props.navigation.navigate("login")} />
                        <Appbar.Content title="Register" />
                    </Appbar>

                    <View style={registerStyle.content}>
                        
                        <TextInput label="Login" onChange={this.handleChangelogin} />
                        <TextInput label="Password" secureTextEntry={true} onChange={this.handleChangemdp} />

                        <Button mode="contained" style={registerStyle.button} onPress={this.handleSubmit} >Add</Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}