import { Button, FlatList, Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { List, ListHeader, ListItem, StartMenu } from './src/components/index';

import CartMenu from './src/components/cart-menu'
import {styles} from './src/components/list-header/styles'
import { themes } from './src/constants/themes';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})
  const [allReady, setAllReady] = useState(false)
  const [cartVisible, setCartVisible] = useState(false)

  const onHandleInput = (text) => {
    setTask(text)
  }
  const onHandleAdd = () => {
    
    setTaskList((currentTasks) => [
      ...currentTasks,
      {id: Math.random(), value:task}]
      )
    setTask("")
  }
  const onHandleReset = () => {
    setTask("")
    setTaskList([])
  }
  const onHandleSubmit = () => {
    setAllReady(true)
    setCartVisible(true)
  }
  const onHandleBackToStart = () => {
    setAllReady(false)
    setCartVisible(false)
  }

  const onHandleModal = (id) => {
    setItemSelected(taskList.filter((item) => item.id === id)[0])
    setModalVisible(true)
  }

  const onHandleDelete = (itemSelected) => {
    setTaskList((currentTasks) => currentTasks.filter((task) => task.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }


  
  const ListHeaderComponent = () =>{
    return(
       taskList.length > 0 && <ListHeader title='Task List'/>
       )
  }
  
  const renderItem = ({item}) => {
    return (
    <View key={`task-${item.id}`}>
      <Text>{item.value}</Text>
      <TouchableOpacity 
      style={themes.deleteButton}
      onPress={() => onHandleModal(item.id)}>
        <Text style={themes.deleteText}>
          X
        </Text>
      </TouchableOpacity>
    </View>)
  }

  return (
    <View style={themes.container}>
      <StartMenu condition={!allReady}>
      <View style={themes.containerTask}>
      <TextInput
        style={themes.text}
        placeholder="Add new task"
        value={task}
        onChangeText={(text) => onHandleInput(text)}
        />
      <Button style={themes.button}
        title="ADD"
        onPress={onHandleAdd}
        disabled={task.length === 0}/>
      <Button style={themes.button}
       title="RESET"
       onPress={onHandleReset}
       disabled={(taskList.length || task.length) === 0}/>

      </View>
      <List
        header={ListHeaderComponent}
        data={taskList}
        renderer={renderItem}
        keyExtractor= {(item) => item.id.toString()}
        style={themes.containerList}
        
      />
      

      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => null}>
          <View>
            <Text>{itemSelected.value}</Text>
            <Button
            title="Delete"
            onPress={() => onHandleDelete(itemSelected)}>
            </Button>
          </View>

      </Modal>

      <Button style={themes.button}
        title="SUBMIT"
        onPress={onHandleSubmit}/>
        </StartMenu>
        
        <CartMenu condition={cartVisible}>
          <View>
          <Text style={themes.title}>
            Esto es lo que se tiene hasta ahora
          </Text>
          <Image
            source={{
              uri: 'https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-2-580x386.jpg'
          }}
          style={themes.image}
            />
        </View>
        <View>
        <List
        header={""}
        data={taskList}
        renderer={renderItem}
        keyExtractor= {(item) => item.id.toString()}
        style={themes.containerList}
        
        />
        </View>
        <Button style={themes.button}
          title="BACK"
          onPress={onHandleBackToStart}
        />
        </CartMenu>
    </View>
    
  );
}

