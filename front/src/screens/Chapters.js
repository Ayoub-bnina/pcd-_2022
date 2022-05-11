import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import ProgressBar from "./progressBar";
//import { VideoProgress } from 'react-video-progress'

export default class Chapters extends React.Component {
    render() {
        const { title, num, duration, percent, color, onPress, onPressLearnMore } = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: "row",
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                }}
            >
                <View style={{
                    backgroundColor: color,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 6
                }}>
                    <Text style={{
                        fontSize: 10,
                        fontFamily: "Bold"
                    }}>{num}</Text>
                </View>
                <View>
                    <Text style={{
                        color: "#345c74",
                        fontFamily: "Bold",
                        fontSize: 13,
                        paddingLeft: 20,
                        width: 180
                    }}>
                        {title}
                    </Text>
                    <Text style={{
                        color: "#f58084",
                        fontSize: 12,
                        fontFamily: "Medium",
                        paddingLeft: 20
                    }}>
                        {duration}
                    </Text>
                    {<ProgressBar
                        containerStyle={{
                            marginTop: 8,



                        }}
                        barStyle={{
                            height: 3

                        }}
                        barPercentage={percent}
                    />}

                </View>
                <Text style={{
                    color: "#345c74",
                    fontFamily: "Medium",
                    fontSize: 13,
                    width: 50
                }}>
                    {percent}%
                </Text>


            </TouchableOpacity>
        )
    }

}
