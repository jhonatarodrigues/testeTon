import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Language from '~/language';

// -- pages
import ListProducts from './pages/ListProducts';

function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListProducts"
          component={ListProducts}
          options={{ title: Language.header.title.listProducts }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
