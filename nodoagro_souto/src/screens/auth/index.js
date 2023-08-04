import { ImageBackground, View, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import * as ACTIONS from '../../store/actions/index'
import ClientTypeSelector from "../../components/auth/client-type/index"
import AuthScreen from "../../components/auth/auth-screen/index"
import { useEffect } from "react"
import Ionicons from '@expo/vector-icons/Ionicons'

const Auth = () => {
    const image = require('../../images/backgrounds/home_background.png')
    const logo = require('../../images/backgrounds/logo.png')
    const selectedClientType = useSelector((state) => state.auth.clientType)
    const dispatch = useDispatch()

    // useEffect(
    //     ()=>{
            
    //         dispatch(ACTIONS.selectClientType('client'))
    //     }
    // )
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="stretch" style={styles.background}>
            {selectedClientType ? 
            
            <View style={styles.arrowBackContainer}>
                <TouchableOpacity 
                style={styles.circleContainer}
                onPress={() =>dispatch(ACTIONS.selectClientType(undefined))}>
                    <Ionicons  style={styles.arrowBack} name={"arrow-back"}/>
                </TouchableOpacity>
                
            </View> : <></>
            }
            <View style={styles.imageContainer}>

                <Image source={logo} style={styles.image} />
            </View>
            {
                !selectedClientType ?
                <ClientTypeSelector/>
                :   <AuthScreen clientType={selectedClientType} />}
            </ImageBackground>
        </View>
    )
}

export default Auth
