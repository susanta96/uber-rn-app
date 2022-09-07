import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const data = [
  {
    id: '1',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '2',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  }
]


const navOptions = () => {
  const nav = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
   <FlatList 
    className='flex-grow-0 p-2'
    data={data}
    keyExtractor={(item) => item.id}
    horizontal
    renderItem={({ item }) => (
      <TouchableOpacity className='p-2 m-2 w-40 pl-6 pb-6 pt-4 bg-gray-200' onPress={() => nav.navigate(item.screen)} disabled={!origin}>
        <View className={`${!origin ? 'opacity-40': ''}`}>
          <View>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <Text className='font-bold text-lg mt-2'>{item.title}</Text>
          <View  className='p-2 w-10 mt-4 rounded-full bg-black'>
            <Icon type='antdesign' color='white' name='arrowright' />
          </View>
        </View>
      </TouchableOpacity>
    )}
   />
  )
}

export default navOptions

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  }
})