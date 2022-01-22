import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderIconCart from './components/headerIconCart';
import Language from '~/language';

// -- pages
import ListProducts from './pages/listProducts';
import Cart from './pages/cart';

function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListProducts"
          component={ListProducts}
          options={({ navigation }) => ({
            title: Language.header.title.listProducts,
            headerRight: () => (
              <HeaderIconCart onPressIcon={() => navigation.navigate('Cart')} />
            ),
          })}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: Language.header.title.cart }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
