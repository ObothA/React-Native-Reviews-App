import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './routes/homeStack';
import About from './screens/about';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_700Bold,
  });

  const Drawer = createDrawerNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeStack} />
            <Drawer.Screen name='About' component={About} />
          </Drawer.Navigator>
        </NavigationContainer>
        {/* <HomeStack /> */}
        <StatusBar style='auto' />
      </>
    );
  }
}
