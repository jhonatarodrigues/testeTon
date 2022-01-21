import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import Reactotron, {networking, openInEditor} from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';
import Config from 'react-native-config';

if (__DEV__) { //eslint-disable-line

const host = Platform.OS == 'ios' ? 'localhost' : Config.REACTOTRON_HOST ?? 'localhost';

  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host, name: 'TesteTon' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(networking())
    .use(openInEditor())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect(); // let's connect!

  // // -- change console.log to reactotron.log
  console.log = (...args) => {
    // send this off to Reactotron.
    Reactotron.display({
      name: 'CONSOLE.LOG',
      value: args,
      preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
  };

  Reactotron.onCustomCommand('clearStorage', async () => {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(
      keys.filter(key => key !== '@REACTOTRON/clientId'),
    );
    console.tron.log('AsyncStorage cleared by custom command in Reactotron');
  });

  Reactotron.onCustomCommand('showStorage', async () => {
    const keys = await AsyncStorage.getAllKeys();
    const storage = await AsyncStorage.multiGet(keys);

    console.tron.log(storage);
  });

  Reactotron.onCustomCommand('showAppStorage', async () => {
    const keys = await AsyncStorage.getAllKeys();
    const storage = await AsyncStorage.multiGet(keys);
    const parsedAuth = {};

    storage
      .filter(([key]) => key !== '@REACTOTRON/clientId')
      .forEach(([key, data]) => {
        try {
          parsedAuth[key] = JSON.parse(data);
        } catch (err) {
          parsedAuth[key] = data;
        }
      });

    console.tron.log(parsedAuth);
  });

}
