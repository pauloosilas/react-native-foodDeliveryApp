import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens' 
import { COLORS, icons } from '../constants'
import { Image } from 'react-native'

const Tab = createBottomTabNavigator()

export const Tabs = () => {
    return (
        <Tab.Navigator  
            screenOptions={{
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation:0,
                },
                tabBarShowLabel:false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                            />
                    )
                }}
                />

            <Tab.Screen
                name="Search"
                component={Home}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                            />
                    )
                }}
                />


            <Tab.Screen
                name="Like"
                component={Home}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                            />
                    )
                }}
                />


            <Tab.Screen
                name="User"
                component={Home}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                            />
                    )
                }}
                />
        </Tab.Navigator>
    )
}
