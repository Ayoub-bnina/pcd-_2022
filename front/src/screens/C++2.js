import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, } from 'react-native'
import { Modalize } from 'react-native-modalize'
import Chapters2 from './Chapters2'

export default class cpp2 extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../images/background3.png')}
                style={{ width: "100%", height: "100%" }}
            >
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    paddingHorizontal: 20
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("managingModules")}
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            borderRadius: 10,
                            marginTop: 30,
                            backgroundColor: "#9a3c7e"
                        }}
                    >
                        <Image
                            source={require('../images/a1.png')}
                            style={{ height: 15, width: 20 }}
                        />
                    </TouchableOpacity>
                    <View style={{
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                        borderRadius: 10,
                        marginTop: 30,
                        backgroundColor: "#9a3c7e",
                        marginLeft: 240
                    }}>
                        <Image
                            source={require('../images/hum.png')}
                            style={{ height: 15, width: 20 }}
                        />
                    </View>
                </View>
                <Image
                    source={require('../images/c++logo.png')}
                    style={{
                        height: 35,
                        width: 35,
                        alignSelf: "center",
                        marginTop: 20
                    }}
                />
                <Text style={{
                    color: "#FFF",
                    fontFamily: "Bold",
                    fontSize: 35,
                    width: 200,
                    alignSelf: "center",
                    textAlign: "center"
                }}>C++ Cources </Text>
                <Text style={{
                    color: "#FFF",
                    fontFamily: "Medium",
                    fontSize: 35,
                    width: 200,
                    alignSelf: "center",
                    textAlign: "center"
                }}>
                    Essentials
                </Text>


                <Modalize
                    handleStyle={{
                        marginTop: 30,
                        backgroundColor: "#e9e9e9",
                        width: 80
                    }}
                    modalStyle={{
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60
                    }}
                    alwaysOpen={510}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                >
                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 30,
                        marginTop: 40
                    }}>
                        <Image
                            source={require('../images/2.jpg')}
                            style={{
                                height: 50,
                                width: 50,
                                borderWidth: 2,
                                borderColor: "#f58084",
                                borderRadius: 50,
                            }}
                        />
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{
                                color: "#345c74",
                                fontFamily: "Bold",
                                fontSize: 18
                            }}>Mikolaj Galezioski</Text>
                            <Text style={{
                                color: "#f58084",
                                fontFamily: "Medium",
                                fontSize: 12
                            }}>
                                Author, UI/UX Designer
                            </Text>
                        </View>
                        <View style={{
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#fff2f2",
                            width: 40,
                            height: 40,
                            borderRadius: 40
                        }}>
                            <Image
                                source={require('../images/a2.png')}
                            />
                        </View>
                    </View>
                    <View>

                        <Chapters2
                            num={1}
                            color="#fde6e6"
                            percent={25}
                            duration="13 minutes"
                            title="Introduction"
                            onPress={() => this.props.navigation.navigate('CppIntro')}
                        />
                        <Chapters2
                            num={2}
                            color="#f9e1fc"
                            percent={50}
                            duration="42 minutes"
                            title="Variables"
                            onPress={() => this.props.navigation.navigate('CppVariables')}

                        />
                        <Chapters2
                            num={3}
                            color="#e8f1fd"
                            percent={0}
                            duration="29 minutes"
                            title="Operators"
                            onPress={() => this.props.navigation.navigate('CppOperators')}

                        />
                        <Chapters2
                            num={4}
                            color="#e5ffef"
                            percent={0}
                            duration="33 minutes"
                            title="Conditions"
                            onPress={() => this.props.navigation.navigate('CppConditions')}

                        />
                        <Chapters2
                            num={5}
                            color="#fbfaf6"
                            percent={0}
                            duration="21 minutes"
                            title="Loops"
                            onPress={() => this.props.navigation.navigate('CppBoucles')}

                        />



                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("addMatiere")}>
                        <View style={{
                            flexDirection: "row",
                            paddingVertical: 5,
                            backgroundColor: "#A3E4D7",
                            marginHorizontal: 40,
                            paddingVertical: 15,
                            alignItems: "center",
                            borderRadius: 10,
                            justifyContent: "center",
                            marginTop: 20
                        }}>

                            <Text style={{
                                color: "#FFF",
                                fontFamily: "Bold",
                                fontSize: 15,
                                marginRight: 50
                            }}>
                                Add
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Modalize>

            </ImageBackground>
        )
    }
}