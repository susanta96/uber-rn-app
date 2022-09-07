import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination , setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const nav = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Text className='py-5 text-center text-xl '>Good Morning, Susanta !</Text>
      <View className='border-t border-gray-200 flex-shrink'>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to ?'
            styles={inputBoxStyle}
            query={{
              language: 'en',
              key: GOOGLE_MAPS_APIKEY
            }}
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description
              })) 

              nav.navigate('RideOptionsCard');
            }}
            fetchDetails={true}
            minLength={2}
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const inputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 0,
    paddingTop: 20
  },
  textInput: {
    backgroundColor: '#eeeeef',
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})