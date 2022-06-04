import { Button, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { List, ListHeader, ListItem } from './components/index';

import { themes } from './constants/themes';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const onHandleInput = (text) => {
    setTask(text)
  }
  const onHandleSubmit = () => {
    
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
  
  return (
    <View style={themes.container}>
      <View style={themes.containerTask}>
      <TextInput
        style={themes.text}
        placeholder="Add new task"
        value={task}
        onChangeText={(text) => onHandleInput(text)}
        />
      <Button style={themes.button}
        title="ADD"
        onPress={onHandleSubmit}
        disabled={task.length === 0}/>
      <Button style={themes.button}
       title="RESET"
       onPress={onHandleReset}
       disabled={(taskList.length || task.length) === 0}/>

      </View>
      <List
        header={ListHeaderComponent}
        data={taskList}
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
    </View>
    
  );
}

