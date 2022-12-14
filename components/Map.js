import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
  const origin = useSelector(selectOrigin)
  return (
    <MapView
      className='flex-1'
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location &&
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          identifier='origin'
          title='Origin'
          description={origin.description}
        />
      }
    </MapView>
  )
}

export default Map;