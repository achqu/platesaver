import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import {Link, Redirect, router} from 'expo-router';
import { SafeAreaView} from 'react-native-safe-area-context';
import React from 'react'
import FridgeList from '../../components/FridgeList'

const fridge = () => {
  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
    <View className= "p-5 justify-center items-center">
    <Text className="font-pmedium text-3xl text-secondary-200">
                    fridge
                    </Text>
                    <FridgeList />
      
    </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default fridge