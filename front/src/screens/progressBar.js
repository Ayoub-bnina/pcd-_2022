import React from 'react';
import { View, Text } from 'react-native';



const ProgressBar = ({ containerStyle, barStyle, barPercentage, }
) => {
    return (
        <View style={{ ...containerStyle }}>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    marginTop: 8,
                    backgroundColor: "#464646",
                    ...barStyle
                }}>

            </View>
            <View style={{

                position: 'absolute',
                bottom: 0,
                left: 0,
                width: barPercentage,
                marginTop: 8,
                backgroundColor: "#FF002E",
                ...barStyle
            }}>
            </View>

        </View>


    )
}
export default ProgressBar;