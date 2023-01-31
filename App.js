import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import Constants from './src/controllers/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {SliderBox} from 'react-native-image-slider-box';
import GetApis from './src/controllers/apis/getAips';
import PopularMovies from './src/components/PopularMovies/PopularMovies';
import TopRatedMovies from './src/components/TopRatedMovies/TopRatedMovies';
import Home from './src/components/Home/Home';
import SearchMovies from './src/components/SearchMovies/SearchMovies';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailMovie from './src/components/common/DetailMovie/DetailMovie';
import UserReviews from './src/components/UserReviews/UserReviews';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();


const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={Constants.screenName.Home}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <HomeStack.Screen name={Constants.screenName.Home} component={Home} />
      <HomeStack.Screen
        name={Constants.screenName.DetailMovie}
        component={DetailMovie}
        screenOptions={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name={Constants.screenName.PopularMovies}
        component={PopularMovies}
        screenOptions={() => ({
          headerShown: true,
        })}
      />
      <HomeStack.Screen
        name={Constants.screenName.TopRatedMovies}
        component={TopRatedMovies}
        screenOptions={() => ({
          headerShown: true,
        })}
      />
      
      <HomeStack.Screen
        name={Constants.screenName.UserReviews}
        component={UserReviews}
        screenOptions={() => ({
          headerShown: true,
        })}
      />
    </HomeStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <SearchStack.Screen
        name={Constants.screenName.SearchMovies}
        component={SearchMovies}
      />
      <SearchStack.Screen
        name={Constants.screenName.DetailMovie}
        component={DetailMovie}
        screenOptions={{
          headerShown: true,
        }}
      />
      <SearchStack.Screen
        name={Constants.screenName.UserReviews}
        component={UserReviews}
        screenOptions={{
          headerShown: true,
        }}
      />
    </SearchStack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#000' hidden={true}/>
      <Tabs.Navigator
        initialRouteName={Constants.screenName.Home}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconColor;
            let iconSize;
            if (route.name === 'HomeStackScreen') {
              iconName = focused ? 'home' : 'ios-home-outline';
              iconColor = focused ? '#04FFA9' : '#008053';
              iconSize = focused ? 35 : 25;
            }
            if (route.name === 'SearchStackScreen') {
              iconName = focused ? 'ios-search-outline' : 'search';
              iconSize = focused ? 35 : 25;
              iconColor = focused ? '#04FFA9' : '#008053';
            }

            return <Icon name={iconName} size={iconSize} color={iconColor} />;
          },
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            bottom: 6,
            right: 16,
            left: 16,
            borderRadius: 18,
            backgroundColor: '#000',
            borderTopColor: '#000',
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarLabel: true,
          tabBarInactiveTintColor: 'black',
        })}>
        <Tabs.Screen name="HomeStackScreen" component={HomeStackScreen} />
        <Tabs.Screen name="SearchStackScreen" component={SearchStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
