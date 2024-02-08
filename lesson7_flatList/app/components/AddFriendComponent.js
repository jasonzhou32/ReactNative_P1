import { StyleSheet, Text, View, TextInput, TouchableHighlight, Keyboard } from 'react-native'
import React, {useState} from 'react';
import colors from '../config/colors';

import Constants from 'expo-constants';


export default function AddFriendComponent({startingId, handleAdd}) {
    const [id, setId] = useState(startingId);

    const[name, setName] = useState('');

    const[age, setAge] = useState('')

    const[favActivity, setFavActivity] = useState('');


    const handleAddFriend = () => {
        // create a friend object with state var
        const newFriend = {
            id: id,
            name: name,
            age: age,
            favActivity: favActivity,
            
        }
        // call the handleAdd method from App.js that 
        // was passed to us in a prop
        handleAdd(newFriend);
        // reset state var, dismiss keyboard
        setId(id + 1);
        setName('');
        setAge('');
        setFavActivity('');
        Keyboard.dismiss();
    }





    return (
        <View style={styles.friendInputContainer}>
          <View style={styles.inputRow}>
            <Text style={[styles.itemText, {marginLeft: 30}]}>Name: </Text>
            <TextInput 
              style={styles.textInput}
              onChangeText={text => setName(text)}
              value={name}
              ></TextInput>
            <Text style={[styles.itemText, {marginLeft: 30}]}> Age: </Text>
            <TextInput 
              style={[styles.textInput, {width:50}]}
              onChangeText={text => setAge(text)}
              value={age}
              ></TextInput>
          </View>
          <View style={styles.inputRow}>
            <Text style={[styles.itemText, {marginLeft: 30, marginTop: 10}]}>Fav Activity: </Text>
            <TextInput 
              style={[styles.textInput, {width:190, marginTop: 10}]}
              onChangeText={text => setFavActivity(text)}
              value={favActivity}
              ></TextInput>
            
          </View>

          <TouchableHighlight

            onPress={handleAddFriend}

            style={[styles.button, {marginLeft: 30, marginTop: 10}]}  

            underlayColor={colors.dark}>

            <View style={{alignItems: 'center'}}>

              <Text style={styles.buttonText}>Add Friend</Text>

            </View>

          </TouchableHighlight>

          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.verylight,
        padding: 8,
      },
  
      friendInputContainer: {
        backgroundColor: colors.medium,
        height: 110,
        width: '100%',
        padding: 10,
        marginBottom: 5,
      },
  
      inputRow:{
        flexDirection: 'row',
  
  
      },
  
      textInput: {
        height: 20,
        width:100,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: colors.light,
      },
  
      listItemContainer: {
        padding: 5,
        backgroundColor: colors.light,
      },
  
      itemText: {
        color: colors.primary,
        fontSize: 14,
  
      },
     
      text: {
        color: colors.primary,
        fontSize: 20,
      },
  
  
      button:{
        backgroundColor: colors.secondary,
  
        height: 25,
  
        width: '35%',
  
        justifyContent: 'center',
      }

});