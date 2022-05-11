


import React from 'react';
import axios from 'axios';
import Constants from "expo-constants";

import { SafeAreaView, ScrollView, View, form } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { registerStyle } from "./registerStyle";


import { NativeModulesProxy } from 'expo-modules-core';


export default class PersonList1 extends React.Component {
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

    const enseignant = {
      id: this.state.id,
      login: this.state.login,
      mdp: this.state.mdp
    };

    axios.post(`http://localhost:5700/api/v1/enseignant`, enseignant)
      .then(res => {
        alert(" teacher added successfully");
        console.log(res);
        console.log(res.data);

      })
  }

  render() {




    return (
      <SafeAreaView>
        <ScrollView>
          <Appbar>
            <Appbar.BackAction onPress={() => this.props.navigation.navigate("loginEns")} />
            <Appbar.Content title="Register" />
          </Appbar>

          <View style={registerStyle.content}>



          
            <TextInput label="Login" onChange={this.handleChangelogin} />
            <TextInput label="Password" onChange={this.handleChangemdp} />

            <Button mode="contained" style={registerStyle.button} onPress={this.handleSubmit}  >Add</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}