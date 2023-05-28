import { ImageBackground, View, Text,Image, Button } from "react-native"
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from '../../store/actions/index'
import { styles } from "./styles"
import { ProductList, ProductCard } from "../../components"
import { CATEGORIES, PRODUCTS } from "../../constants/mock_data/index"
import { useEffect } from "react"
import {  selectProduct } from '../../store/actions'
import { themes } from "../../components/product-list/product-card/styles"

const getRandomIds = (array, amount) => {
    let ids = array.map((item) => item.id)
    let randomIds = []
    for (let i = 0; i < amount ; i++) {
        let random = ids[Math.floor(Math.random() * ids.length)]
        randomIds.push(random);
        
    }
    return randomIds
}
const Home = ({navigation}) => {
    const selectedProduct = useSelector(state=> state.products.selected)
    const productsToSample = useSelector(state => state.products.all)
    let sampleProducts = []


        const randomProdIds = getRandomIds(PRODUCTS, 5)
        sampleProducts = productsToSample.filter((prod) => randomProdIds.includes(prod.id))


    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(ACTIONS.userLogout())

    }

    const onSelectedProduct = (item) => {
        dispatch(selectProduct(item.id))
        navigation.navigate('Tienda', {screen:'ProductDetail'})
      }
    return(
        <View style={styles.container}>
            <View>
            <ProductCard item={sampleProducts[0]} onSelected={onSelectedProduct}/>

            </View>
            <Button
             title='Logout'
             onPress={() => onLogout()}/>
        </View>
    )
}

export default Home
