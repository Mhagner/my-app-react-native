import React from 'react'
import { View, Text, Share, TouchableOpacity } from 'react-native'
import styles from './style'


export default function ResultImc({ resultImc, messageResultImg }) {

  const onShare = async () => {
    return await Share.share({
      message: `Meu imc hoje é de: ${resultImc}`,
    })
  }

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharedButton}>
        {resultImc != null ?
          <TouchableOpacity
            onPress={onShare}
            style={styles.shared}>
            <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>
          :
          <View />
        }
      </View>
      <Text style={styles.information}>{messageResultImg}</Text>
      <Text style={styles.numberImc}>{resultImc}</Text>
    </View>
  )
}
