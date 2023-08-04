import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'
import { styles } from './styles'
import { useState } from 'react'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import * as ACTIONS from '../../../store/actions/index'
import { useEffect } from "react"


const logo = require('../../../images/backgrounds/logo.png')
let mock = [1122334455]


const searchUser = (user) => {

    setTimeout(() => { }, 2000)
    if (mock.find((val) => val === user)) {

        return true
    }
    return false
}
const validateUserPhone = (phone, login) => {
    const parsed = parseInt(phone)
    const pattern = new RegExp(/(?:(?:[00])?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}/, 'g')

    if (pattern.test(parsed)) {
        if (searchUser(parsed)) {
            console.log('Encontre el user en la db')
            login(phone)
        }
    }
    return Alert.alert("Ingrese su celular sin 0 ni 15 ni símbolos")
}
const ClientAuth = () => {
    const dispatch = useDispatch()
    const onLogin = (user) => {
        dispatch(ACTIONS.userLogin(user))

    }


    const [userPhone, setUserPhone] = useState('')
    // useEffect(
    //     ()=>{
    //         setUserPhone(1122334455)       
    //         validateUserPhone(userPhone, onLogin)
    //     }
    // )
    return (
        <View style={styles.container}>
            <View>
                <Image source={logo} style={styles.image} />
            </View>
            <View>
                <Text style={styles.inputHeader}>Ingresá tu número de teléfono</Text>
                <View>
                    <TextInput
                        style={styles.inputBar}
                        onChangeText={text => setUserPhone(text)}
                        value={userPhone}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => validateUserPhone(userPhone, onLogin)}>
                        <Text style={styles.textMenu}>Confirmar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default ClientAuth