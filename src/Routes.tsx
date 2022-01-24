import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HeaderIconCart from './components/headerIconCart';
import Language from '~/language';

// -- pages
import ListProducts from './pages/listProducts';
import Cart from './pages/cart';

function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="ListProducts"
          component={ListProducts}
          options={({ navigation }) => ({
            title: Language.header.title.listProducts,
            headerRight: () => (
              <HeaderIconCart onPressIcon={() => navigation.navigate('Cart')} />
            ),
          })}
        />
        <Drawer.Screen
          name="Cart"
          component={Cart}
          options={{ title: Language.header.title.cart }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
