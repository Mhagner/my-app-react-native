import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [textButton, setTextButton] = useState('Calcular IMC')

    function imcCalculator() {
        let heightFormat = height.replace(',', '.');
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2))
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate()
            setErrorMessage('Campo obrigatório*')
        }
    }

    function valitationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual: ')
            setTextButton('Calcular novamente')
            setErrorMessage(null)
            return
        }

        verificationImc()
        setImc(null)
        setTextButton('Calcular')
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                >
                </TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 75.375'
                    keyboardType='numeric'
                >

                </TextInput>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => valitationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc
                resultImc={imc}
                messageResultImg={messageImc}
            />
        </Pressable>
    )
}
