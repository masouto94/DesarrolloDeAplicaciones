import { ImageBackground, View, Text, Image, TouchableOpacity, TextInput } from "react-native"
import { styles } from "./styles"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"
import * as ACTIONS from '../../store/actions/index'
import ClientTypeSelector from "../../components/auth/client-type/index"
import CLIENT_TYPES from '../../constants/mock_data/index'

const Auth = () => {
    const image = require('../../images/backgrounds/home_background.png')
    const logo = require('../../images/backgrounds/logo.png')
    const dispatch = useDispatch()
    const selectedClientType = useSelector((state) => state.auth.clientType)

    const onLogin = (user) => {
        dispatch(ACTIONS.userLogin(user))

    }

    const onLogout = (user) => {
        dispatch(ACTIONS.userLogout(user))

    }
    const [user, setUser] = useState('')

    const selectUser = (clientType) =>{
        dispatch(ACTIONS.selectClientType(clientType))
    }
    if(!selectedClientType){
        return(
            <ClientTypeSelector clientType={CLIENT_TYPES} onPress={selectUser}/>
        )
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
                <Image source={logo} />
                <View>
                    <View>
                        <TextInput
                            placeholder="Ingresá tu teléfono"
                            onChangeText={newText => setUser(newText)}
                            defaultValue={user}
                        />
                        <TouchableOpacity onPress={() => onLogin(user)}>
                            <View>
                                <Text>
                                    Login
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => onLogout(user)}>
                        <View>
                            <Text>
                                Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Auth
