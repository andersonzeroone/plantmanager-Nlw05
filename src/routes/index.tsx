import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackRoutes from './stack';

const Routes = () => (
  <NavigationContainer>
    <StackRoutes/>
  </NavigationContainer>
)
export default Routes;