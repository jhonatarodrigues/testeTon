import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { color } from '~/configs/theme';
import Language from '~/language';

// -- pages
import ListProducts from './pages/listProducts';
import Cart from './pages/cart';

function Routes() {
  const Stack = createStackNavigator();

  const cartIcon = useCallback((navigation) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{ marginRight: 10 }}
      >
        <FontAwesomeIcon icon={faShoppingCart} size={25} color={color.grey} />
      </TouchableOpacity>
    );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListProducts"
          component={ListProducts}
          options={({ navigation }) => ({
            title: Language.header.title.listProducts,
            headerRight: () => cartIcon(navigation),
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
