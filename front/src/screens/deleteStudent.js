import axios from "axios";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, ImageBackground } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { registerStyle } from "./registerStyle";

// <TextInput label="Login" value={login} editable={!isLoading}  onChangeText={onChangeloginHandler}/>
export default class Delete extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:5700/api/v1/etudiant/${this.state.id}`)
      .then(res => {
        alert(" student deleted successfully");
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <ImageBackground

        source={require('../images/backgroundAccueil.jpg')}
        style={{
          width: "100%", height: "100%"
        }}>
        <SafeAreaView>
          <ScrollView >
            <Appbar>
              <Appbar.BackAction onPress={() => this.props.navigation.navigate("managingEtd")} />
            </Appbar>
            <View style={registerStyle.content}>



              <TextInput label="Id" onChange={this.handleChange} />
              <Button mode="contained" style={registerStyle.button} onPress={this.handleSubmit} >Delete</Button>


            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>

    )
  }

}