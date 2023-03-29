import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'


export default function ResultImc({ resultImc, messageResultImg }) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{messageResultImg}</Text>
      <Text style={styles.numberImc}>{resultImc}</Text>
    </View>
  )
}
