import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import About from '../screens/about';

const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='About'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#eee',
            height: 40,
            headerTintColor: '#444',
          },
        }}
      >
        <Stack.Screen
          name='About'
          component={About}
          options={{
            title: 'About Game Zone',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AboutStack;
