import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import Schedule from '../screen/Schedule';
import Profile from '../screen/Profile';
import Chat from '../screen/Chat';

const Tab = createBottomTabNavigator();

const Routes = () => (
 <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen
      options={{headerShown: false}}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{headerShown: false,}}
      name="Schedule"
      component={Schedule}
    />
    <Tab.Screen
      options={{headerShown: false}}
      name="Chat"
      component={Chat}
    />
    <Tab.Screen
      options={{headerShown: false}}
      name="Profile"
      component={Profile}
    />
  </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;