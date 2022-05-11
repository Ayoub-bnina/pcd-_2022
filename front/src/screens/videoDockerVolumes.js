import React from 'react'
import { View, StyleSheet, Image, StatusBar, Dimensions, Text, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av'
import Chapters from '../screens/Chapters'


const { width, height } = Dimensions.get("window");


export default class VideoPage extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <StatusBar backgroundColor="#f58084" />
                <Video
                    source={require('../videos/dockerVolumes.mp4')}
                    rate={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    isLooping={false}
                    useNativeControls
                    style={style.video}
                />
                <Chapters
                    color="#fde6e6"
                    percent={0}
                    duration="13 minutes"
                    title="Volumes"
                    num={5}
                />


                <TouchableOpacity onPress={() => this.props.navigation.navigate("docker")}>
                    <View style={{
                        flexDirection: "row",
                        paddingVertical: 5,
                        backgroundColor: "#f58084",
                        marginHorizontal: 40,
                        paddingVertical: 15,
                        alignItems: "center",
                        borderRadius: 10,
                        justifyContent: "center",
                        marginTop: 20
                    }}>

                        <Image
                            source={require('../images/a1.png')}
                            style={{ height: 15, width: 20 }}
                        />
                        <Text>  </Text>

                        <Text style={{
                            color: "#FFF",
                            fontFamily: "Bold",
                            fontSize: 15,
                            marginRight: 50
                        }}>
                            Go back
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}
const style = StyleSheet.create({
    video: {
        width: width,
        height: height / 3
    },
    container: {
        backgroundColor: "#fff",
        justifyContent: "center"
    }
})