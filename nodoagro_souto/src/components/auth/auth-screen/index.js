import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"
import { styles } from "./styles"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"
import * as ACTIONS from '../../../store/actions/index'
import * as TYPES  from '../../../constants/mock_data/index'

const AuthScreen = () => {
    const dispatch = useDispatch()
    const selectedClientType = useSelector((state) => state.auth.clientType)

    const onLogin = (user) => {
        dispatch(ACTIONS.userLogin(user))

    }

    const onLogout = (user) => {
        dispatch(ACTIONS.userLogout(user))

    }
    const [user, setUser] = useState('')
    return (
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
    )
}

export default AuthScreen