import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ImageBackground } from 'react-native';




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

    },



    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }

});
export default class Accueil extends React.Component {
    render() {
        return (

            <ImageBackground

                source={require('../images/backgroundAccueil.jpg')}
                style={{
                    width: "100%", height: "100%"
                }}
            >




                <SafeAreaView style={styles.container}>



                    <View style={styles.buttonStyle} >

                        <Button
                            color="#48C9B0"
                            title="Admin"
                            onPress={() => this.props.navigation.navigate("login")}
                        />
                    </View>
                    <Separator />
                    <View>

                        <Button
                            color="#85C1E9"
                            title="Teacher"
                            onPress={() => this.props.navigation.navigate("loginEns")}
                        />
                    </View>
                    <Separator />
                    <View>

                        <Button
                            color="#C39BD3"
                            title="Student"
                            onPress={() => this.props.navigation.navigate("loginEt")}
                        />
                    </View>




                </SafeAreaView>
            </ImageBackground >

        );



    }
}

