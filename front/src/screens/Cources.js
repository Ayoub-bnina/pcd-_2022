import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import CourseList from '../screens/CourseList'


export default class Cources extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../images/background2.png')}
                style={{ width: "100%", height: "100%" }}
            >
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    paddingHorizontal: 20
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Home")}
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            borderRadius: 10,
                            marginTop: 30,
                            backgroundColor: "#8bbcdb"
                        }}
                    >
                        <Image
                            source={require('../images/a1.png')}
                            style={{ width: 20, height: 15 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Home")}
                        style={{
                            paddingHorizontal: 10,
                            paddingVertical: 13,
                            borderRadius: 10,
                            marginTop: 30,
                            backgroundColor: "#8bbcdb",
                            marginLeft: 290
                        }}
                    >
                        <Image
                            source={require('../images/hum.png')}
                            style={{ height: 15, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    color: "#FFF",
                    fontSize: 35,
                    fontFamily: "Bold",
                    width: 200,
                    alignSelf: "center",
                    textAlign: "center",
                    marginTop: 34

                }}>
                    Discover Our Cources !!
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
                    alwaysOpen={400}
                    scrollViewProps={{ showsVerticalScrollIndicator: false }}
                >
                    <View style={{ marginTop: 40 }}>
                        <CourseList
                            onPress={() => this.props.navigation.navigate("C")}
                            img={require('../images/ccc.png')}
                            title="Language C"
                            bg="#276DC2"
                        />
                        <CourseList
                            onPress={() => this.props.navigation.navigate("cpp")}
                            img={require('../images/c++logo.png')}
                            title="Language C++"
                            bg="#78B6FF"
                        />
                        <CourseList
                            onPress={() => this.props.navigation.navigate("Python")}
                            img={require('../images/python.png')}
                            title="Python"
                            bg="#FCF3CF"
                        />
                        <CourseList
                            onPress={() => this.props.navigation.navigate("ReactNative")}
                            img={require('../images/ReactNative.webp')}
                            title="React Native Essentials"
                            bg="#82B1FF"
                        />
                        <CourseList
                            onPress={() => this.props.navigation.navigate("html")}
                            img={require('../images/html.png')}
                            title="HTML 5 Essentials"
                            bg="#fef8e3"
                        />
                        <CourseList
                            onPress={() => this.props.navigation.navigate("css")}
                            img={require('../images/css.png')}
                            title="CSS 3 Essentials"
                            bg="#6495ED"

                        />
                        <CourseList
                            onPress={() => this.props.navigation.navigate("AE")}
                            img={require('../images/ae.png')}
                            title=" Design in After Effects"
                            bg="#fcf2ff"
                        />
                        <CourseList
                            onPress={() => this.props.navigation.navigate("ps")}
                            img={require('../images/ps.png')}
                            title=" Photoshop"
                            bg="#87CEEB"
                        />
                        <CourseList
                            onPress={() => this.props.navigation.navigate("Xd")}
                            img={require('../images/xd.png')}
                            title=" Xd Essentials"
                            bg="#fec5e5"
                        />
                    </View>
                </Modalize>
            </ImageBackground>
        )
    }
}
