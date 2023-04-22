import { ImageBackground, View, Image } from "react-native"
import { styles } from "./styles"
import { useSelector } from 'react-redux'

import ClientTypeSelector from "../../components/auth/client-type/index"
import AuthScreen from "../../components/auth/auth-screen/index"

const Auth = () => {
    const image = require('../../images/backgrounds/home_background.png')
    const logo = require('../../images/backgrounds/logo.png')
    const selectedClientType = useSelector((state) => state.auth.clientType)

    console.log("ESTE S",selectedClientType)
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
                <Image source={logo} />
                {
                !selectedClientType ?
                <ClientTypeSelector/>
                :   <AuthScreen clientType={selectedClientType} />}
                
            </ImageBackground>
        </View>
    )
}

export default Auth
