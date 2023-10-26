import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import MypageScreen from './screens/MypageScreen/MypageScreen';

// type RootStackParamList = {
//   Home: undefined;
//   Search: {
//     id: number;
//   };
//   Mypage: undefined;
// };

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'home',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'search'}}
        />
        <Tab.Screen
          name="Mypage"
          component={MypageScreen}
          options={{title: 'mypage'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
