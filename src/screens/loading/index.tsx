import React from 'react'
import { View, Image } from 'react-native'

import Spotify from '../../assets/images/Spotify.png'

export const Loading = () => {
   return (
      <View>
         <Image source={Spotify} />
      </View>
   )
}
