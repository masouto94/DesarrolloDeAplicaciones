import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"
import { styles } from "./styles"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"
import * as ACTIONS from '../../../store/actions/index'
import * as TYPES  from '../../../constants/mock_data/index'
import ClientAuth from "../client-types-auth/ClientAuth"

const AuthScreen = () => {
    const dispatch = useDispatch()
    const selectedClientType = useSelector((state) => state.auth.clientType)



    switch (selectedClientType) {
        case 'client':
            return <ClientAuth/>    
        default:
            break;
    }
}

export default AuthScreen