import { View,Text, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'
import { styles } from './styles'
import { useState } from 'react'
import { Button } from 'react-native-elements'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import * as ACTIONS from '../../../store/actions/index'


const logo = require('../../../images/backgrounds/logo.png')
let mock = [1122334455]


const searchUser =  (user) => {

    setTimeout(()=>{}, 2000)
    if(mock.find((val)=> val ===user)){
        
        return true       
    }
    return false
}
const validateUserPhone = (phone, login) => {
    const parsed = parseInt(phone)
    const pattern = new RegExp(/(?:(?:[00])?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}/, 'g')
    
    if (pattern.test(parsed)) {
        if (searchUser(parsed)){
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
    
    const onLogout = (user) => {
        dispatch(ACTIONS.userLogout(user))
    
    }
    const [userPhone, setUserPhone] = useState('')
    return (
        <View style={styles.container}>
            <View>
                <Image source={logo} style={styles.image} />
            </View>
            <View>
                <Text>Ingresá tu número de cliente</Text>
                <View style={styles.inputBar}>
                    <TextInput
                        onChangeText={text => setUserPhone(text)}
                        value={userPhone}
                    />
                    <Button 
                    title='Confirmar'
                    onPress={() => validateUserPhone(userPhone, onLogin)}/>
                </View>
            </View>
        </View>
    )
}

export default ClientAuth