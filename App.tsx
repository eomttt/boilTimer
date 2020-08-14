import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Router } from 'constants/route';
import { Boiled } from 'pages/Boiled';
import { Guide } from 'pages/Guide';
import { Home } from 'pages/Home';
import { Timer } from 'pages/Timer';
import * as React from 'react';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Router.HOME}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Router.HOME} component={Home} />
        <Stack.Screen name={Router.GUIDE} component={Guide} />
        <Stack.Screen name={Router.TIMER} component={Timer} />
        <Stack.Screen name={Router.BOILED} component={Boiled} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
