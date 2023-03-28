import React from 'react'
import { View, Text} from 'react-native'

export default function ResultImc({ resultImc, messageResultImg }) {
  return (  
    <View>
        <Text>{messageResultImg}</Text>
        <Text>{resultImc}</Text>
    </View>
  )
}
