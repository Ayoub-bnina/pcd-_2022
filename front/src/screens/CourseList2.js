import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, Button } from 'react-native'
//import ProgressCircle from 'react-native-progress-circle'


export default class CourseList extends React.Component {
    render() {
        const { img, title, bg, onPress, onPressLearnMore } = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: "row",
                    backgroundColor: bg,
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    marginTop: 10
                }}
            >
                <Image
                    source={img}
                    style={{ width: 40, height: 40 }}
                />

                <View>
                    <Text style={{
                        color: "#345c74",
                        fontFamily: "Bold",
                        fontSize: 13,
                        paddingHorizontal: 20,
                        width: 130
                    }}>{title}</Text>
                    <Text style={{
                        color: "#f58084",
                        fontFamily: "Medium",
                        fontSize: 12,
                        paddingHorizontal: 20
                    }}>
                        2 hours ,4 lessons
                    </Text>
                </View>



                <Button style
                    onPress={onPressLearnMore}
                    title="Delete"
                    color="#EC7063"
                    accessibilityLabel="Learn more about this purple button"
                />

            </TouchableOpacity>
        )
    }
}