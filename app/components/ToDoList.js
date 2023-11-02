import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { addToDo, removeToDo } from '../redux/actions/ToDoAction';
import { useSelector, useDispatch } from 'react-redux';

const ToDoList = () => {
    const [newToDo, setNewToDo] = useState('');
    const todo = useSelector((state)=> state.todoReducer );
    const dispatch = useDispatch();

    const handleAdd=() => {
        dispatch(addToDo(newToDo));
        setNewToDo('');
    }
    const handleRemove=(id) => {
        dispatch(removeToDo(id));
    }
  return (
    <View>
        <TextInput
           placeholder="Enter new task!"
           value={newToDo}
           onChangeText={(text) => setNewToDo(text) }
        />
        <Button title="Add" onPress={()=> handleAdd()} />
        <FlatList
            data={todo}
            
        />
      
    </View>
  )
}

export default ToDoList

