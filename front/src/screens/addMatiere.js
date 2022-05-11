import React from 'react';
import axios from 'axios';
import { SafeAreaView, ScrollView, View, ImageBackground } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { addMatiereStyle } from "./addMatiereStyle";


export default class addMatiere extends React.Component {
    state = {
        idem: '',
        libelleMat: '',

    }
    
    handleChangeid = event => {
        this.setState({ idem: event.target.value });
    }
    handleChangelibelle = event => {
        this.setState({ libelleMat: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();

        const matiere = {
            idem: this.state.idem,
            libelleMat: this.state.libelleMat,

        };

        axios.post(`http://localhost:5700/api/v1/matiere`, matiere)
            .then(res => {
                alert("module added successfully");
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
                            

                            <TextInput label="Name of module" onChange={this.handleChangelibelle}/>


                            <Button mode="contained" style={addMatiereStyle.button} onPress={this.handleSubmit}>Add</Button>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>

        )
    }
}