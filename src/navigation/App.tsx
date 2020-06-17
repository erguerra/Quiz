import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="Questions" component={Quiz} options={{ 
                    headerStyle: styles.header,
                    headerTitleAlign: 'center',
                    headerTintColor: 'white'
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#009084"	
    },

    title: {
        color: "white"
    }
});