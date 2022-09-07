import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import NavOptions from '../components/navOptions';
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination , setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='p-5'>
        <Image
          className='h-[100px] w-[100px]'
          style={{resizeMode: 'contain'}}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
      </View>

      <GooglePlacesAutocomplete
        placeholder='Where from ?'
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18
          }
        }}
        query={{
          language: 'en',
          key: GOOGLE_MAPS_APIKEY
        }}
        onPress={(data, details = null) => {
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
          })) 

          dispatch(setDestination(null))
        }}
        fetchDetails={true}
        minLength={2}
        enablePoweredByContainer={false}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
      />

      <NavOptions />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})