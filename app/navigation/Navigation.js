import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
       <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
             <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
             <Stack.Screen name="Signup" options={{headerShown: false}} component={SignupScreen}/>
             <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
          </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Navigation;


