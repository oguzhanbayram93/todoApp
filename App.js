
import React, { useState} from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from './Task';

export default function App() {
  const [list, setList] = useState("");
  const [task, setTask] = useState([]);
  const handleText = () => {
    Keyboard.dismiss();
    setTask([...task,list]);
    setList(null);
  }

  const deleteTask =(index)=> {
    let deletecopy = [...task];
    deletecopy.splice(index, 1);
    setTask(deletecopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
      <Text style={styles.header }>today's works</Text>
        {
          task.map((item, i) => {
            return (
              <TouchableOpacity onPress={deleteTask }>

              <Task key={i} item={item} />
              </TouchableOpacity>
            );
          
          })
        }
      
     
      </View>
      
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View  style={styles.touchContainer}>
          <TextInput style={styles.input} placeholder="yapılacak..." value={list} onChangeText={(text)=>{return setList(text)} }/>
          <TouchableOpacity onPress={handleText}>
            <View style={styles.button }>
            <Text>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    flexDirection: "column",
    backgroundColor: "#868e96",
   justifyContent: "space-between",
  },
  header: {
    fontWeight:"bold",
    fontSize: 24,
    marginTop: 50,
    marginLeft:10
  },
  input: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: 225,
    backgroundColor: "white",
  },
touchContainer: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginBottom: 50,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    padding:20,
  }
            
});
