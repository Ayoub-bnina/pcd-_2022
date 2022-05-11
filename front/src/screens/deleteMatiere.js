import React from "react";
import axios from "axios";
import { SafeAreaView, ScrollView, View, ImageBackground } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { addMatiereStyle } from "./addMatiereStyle";


export default class deleteMatiere extends React.Component {
    state = {
        libelleMat: '',
    }
    handleChange = event => {
        this.setState({ libelleMat: event.target.value });
      }
      handleSubmit = event => {
        event.preventDefault();
    
        axios.delete(`http://localhost:5700/api/v1/matiere/${this.state.libelleMat}`)
          .then(res => {
            alert(" module deleted successfully");
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
                            <Appbar.BackAction onPress={() => this.props.navigation.navigate("managingMatieres")} />
                        </Appbar>
                        <View style={addMatiereStyle.content}>


                            <TextInput label="Name of module" onChange={this.handleChange}/>


                            <Button mode="contained" style={addMatiereStyle.button} onPress={this.handleSubmit}>Delete</Button>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>

        )
    }
}