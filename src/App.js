import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Auth} from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default App;
