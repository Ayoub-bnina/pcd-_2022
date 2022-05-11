import * as React from 'react';
import { ImageBackground } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

const MyComponent = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <Provider>
            <Portal>
                <ImageBackground

                    source={require('../images/backgroundAccueil.jpg')}
                    style={{
                        width: "100%", height: "100%"
                    }}
                >
                    <FAB.Group
                        open={open}
                        icon={open ? 'calendar-today' : 'plus'}
                        actions={[
                            { onPress: () => navigation.navigate("managingModules") },

                            {
                                icon: 'email',
                                label: 'Conversations',
                                onPress: () => console.log('Pressed email'),
                            },
                            {
                                icon: 'bell',
                                label: 'Notifications',
                                onPress: () => console.log('Pressed notifications'),
                                small: false,
                            },
                        ]}
                        onStateChange={onStateChange}


                    />

                </ImageBackground>

            </Portal>
        </Provider>
    );
};

export default MyComponent;