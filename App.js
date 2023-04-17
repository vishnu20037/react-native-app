import React from 'react';
import Invoices from './Screens/Invoices';
import Home from './Screens/Home';
import Payment from './Screens/Payment';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Success from './Screens/Success';
import Header from './Screens/Header';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#2A2D31',
            },
            headerTintColor: '#ECECEC',
            headerTitleStyle: {
              fontSize: 16,
            },
          }}
        />
        <Stack.Screen
          name="Invoices"
          component={Invoices}
          options={{
            title: 'Invoices',
            headerStyle: {
              backgroundColor: '#2A2D31',
            },
            headerTintColor: '#ECECEC',
            headerTitleStyle: {
              fontSize: 16,
              color: '#ECECEC',
            },
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={({route}) => ({
            headerTintColor: '#ECECEC',
            headerStyle: {
              backgroundColor: '#2A2D31',
            },
            headerTitle: () => (
              <Header
                billNo={route.params.billNo}
                retailerName={route.params.retailerName}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={({route}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#188748',
            },
            headerTintColor: '#188748',
            backgroundColor: '#188748',
            navigationBarHidden: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
