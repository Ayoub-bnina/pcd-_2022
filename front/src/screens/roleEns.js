import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';
const Separator = () => (
    <View style={styles.separator} />
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 50,
        marginVertical: 20,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonStyle: {
        shadowColor: "black"




    }
});
export default class AccueilEns extends React.Component {
    render() {
        return (<ImageBackground

            source={require('../images/backgroundAccueil.jpg')}
            style={{
                width: "100%", height: "100%"
            }}
        >
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: '#C39BD3'
                }}
                onPress={() => this.props.navigation.navigate("loginEns")}
            >
                <Image source={require('../images/a1.png')}
                    style={{ width: 20, height: 20 }} />

            </TouchableOpacity>
            <SafeAreaView style={styles.container}>


                <View>
                    <Button


                        color="#85C1E9"
                        title="Your course list"
                        onPress={() => this.props.navigation.navigate("managingModules")}
                    />
                </View>
                <Separator />
                <View>

                    <Button
                        color="#C39BD3"
                        title="Your profile"
                        onPress={() => this.props.navigation.navigate("profile")}
                    />
                </View>



            </SafeAreaView>
        </ImageBackground >

        );



    }
}

