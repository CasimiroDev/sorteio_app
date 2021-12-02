import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons as Icon, Ionicons } from '@expo/vector-icons'

import Home from './pages/Home';
import NewTicket from './pages/NewTicket';
import Draw from './pages/Draw';
import Wallet from './pages/Wallet';

const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

function RouterBT({route, navigation}){
  return(
      <Stack.Navigator
          screenOptions={()=>({ headerShown: false })}
          initialRouteName="Home"
      >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="NewTicket" component={NewTicket}/>
      </Stack.Navigator>
  )
}

function Router (){
  return (
    <>
      <Tabs.Navigator 
        screenOptions={({ route })=>({
            headerShown: false,
            tabBarIcon: ({focused, color}) => {
            let iconName
            if(route.name == 'Números'){
                iconName = 'numeric'
            }else if(route.name == 'Sorteador'){
                iconName = focused ?
                  'dice-6' :
                  'dice-6-outline'
            }else{
              return focused ?
                <Ionicons name="ios-wallet" size={20} color={color}/> :
                <Ionicons name="ios-wallet-outline" size={20} color={color}/>
            }
            return <Icon name={iconName} size={20} color={color}/>
            },
            tabBarActiveTintColor: '#0a0',
            tabBarInactiveTintColor: '#9999',
            tabBarStyle:{
                height: 65,
                backgroundColor: '#121229',
                borderTopColor: 'transparent',
                paddingTop: 10,
                paddingBottom: 10
            }
        })}
        initialRouteName="Números">
        <Tabs.Screen name="Carteira" component={Wallet}/>
        <Tabs.Screen name="Números" component={RouterBT}/>
        <Tabs.Screen name="Sorteador" component={Draw} />
      </Tabs.Navigator>
    </>
  );
}

export default Router;