import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 40,
          headerTintColor: '#444',
        },
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Game Zone',
        }}
      />
      <Stack.Screen
        name='ReviewDetails'
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default HomeStack;
