import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {Welcome, SignIn, SignUp} from '../../screens';

const RootStack = createStackNavigator();

const Auth = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Welcome" component={Welcome} />
    <RootStack.Screen name="SignIn" component={SignIn} />
    <RootStack.Screen name="SignUp" component={SignUp} />
  </RootStack.Navigator>
);

export default Auth;
