import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, Button } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CourseList2 from '../screens/CourseList2'

export default class managingTeacher extends React.Component {
    render() {
        const { onPressLearnMore } = this.props
        return (
            <ImageBackground
                source={require('../images/background.png')}
                style={{ width: "100%", height: "100%" }}
            >
                <ScrollView>
                    <View style={{
                        width: "100%",
                        alignItems: "flex-end",
                        paddingHorizontal: 20
                    }}>
                        <View style={{
                            paddingHorizontal: 10,
                            paddingVertical: 12,
                            borderRadius: 10,
                            marginTop: 30,
                            backgroundColor: "#d1a0a7"
                        }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("FAB")}>
                                <Image

                                    source={require('../images/hum.png')}
                                    style={{ height: 15, width: 20 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{
                        paddingHorizontal: 20,
                        fontSize: 35,
                        paddingTop: 40,
                        fontFamily: "Bold",
                        color: "#FFF"
                    }}>
                        Welcome back Louay
                    </Text>




                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        padding: 10,
                        borderRadius: 12,
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        <TextInput
                            placeholder="Search something"
                            placeholderTextColor="#345c74"
                            style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                width: 370,
                                height: 25,
                                paddingHorizontal: 12
                            }}
                        />
                        <Image
                            source={require('../images/sear.png')}
                            style={{ height: 17, width: 17 }}
                        />
                    </View>

                    <Text style={{
                        color: "#345c74",
                        fontFamily: "Bold",
                        fontSize: 20,
                        paddingHorizontal: 20,
                        marginTop: 20,
                        marginBottom: 10
                    }}>Your Cources </Text>



                    <CourseList2
                        onPress={() => this.props.navigation.navigate("java")}
                        img={require('../images/javaa.png')}
                        title=" Java"
                        bg="#FCF3CF"
                    />
                    <CourseList2
                        onPress={() => this.props.navigation.navigate("cpp2")}
                        img={require('../images/c++logo.png')}
                        title="language C ++"
                        bg="#78B6FF"
                    />
                    <CourseList2
                        onPress={() => this.props.navigation.navigate("docker")}
                        img={require('../images/dockerr.png')}
                        title="Docker"
                        bg="#D6EAF8"
                    />
                    <CourseList2
                        onPress={() => this.props.navigation.navigate("angular")}
                        img={require('../images/angular.png')}
                        title="Angular"
                        bg="#F5B7B1"
                    />

                    <CourseList2
                        onPress={() => this.props.navigation.navigate("nodejs")}
                        img={require('../images/node.png')}
                        title="NodeJs"
                        bg="#ABEBC6"


                    />

                </ScrollView>
            </ImageBackground>
        )
    }
}