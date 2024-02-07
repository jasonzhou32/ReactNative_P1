import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableHighlight, Keyboard } from 'react-native';

import Constants from 'expo-constants';

import colors from './app/config/colors';
import ListItem from './app/components/ListItem';
import ListItemSeparator from './app/components/ListItemSeparator';
import ListItemDeleteAction from './app/components/ListItemDeleteAction';


export default function App() {

  // this is the array we will use for the example on FlatLists
    const initialFriends = [
      {
        id: 1,
        name: "Kash",
        age: "16",
        favActivity: "Hanging with friends",
      },
      {
        id: 2,
         name: "Grant",
        age: "18",
        favActivity: "Listening to music",
      },
     // add more if you like, continue the same format and use unique id numbers
      {
        id: 3,
        name: "Daniel",
        age: "17",
        favActivity: "Sleeping",
      },
      {
        id: 4,
         name: "Jason",
        age: "16",
        favActivity: "Playing chess",
      },
    ]

    const [friends, setFriends] = useState(initialFriends);


    const [id, setId] = useState(initialFriends.length+1);

    const[name, setName] = useState('');

    const[age, setAge] = useState('')

    const[favActivity, setFavActivity] = useState('');

    // friend is the input parameter
    const handleDelete = (friend) => {
      /*
        Creating a new array that represents all friends
        EXCEPT the one we clicked on. The filter method
        will only return values that make the statement true.
        Only return friend objects such that the id of the friend
        is NOT EQUAL to the id of the friend we clicked on 
        when this method was called.

        Treat filter like a for each loop where f is the temp
        variable to represent each friend as you loop through it.
      */
      const newFriends = friends.filter(f => f.id !== friend.id);
      // Calling setFriends will change what friends is equal to
      // and this will cause a rerender of the component.
      setFriends(newFriends);
    }

    /*
      This method is called when they are ready to add a friend
      Create an object with the four state variables (id, name, age, favActivity)
      call setFriends to update the array with this object at he end
      Last, call setId to update the id value for next friend to be added
    */

    const handleAdd = () => {
      const newFriend = {
        id: id,
        name: name,
        age: age,
        favActivity: favActivity,
        
      }

      // ... is the spread operator
      // essentially we are saying take the whole friends array
      // add newFriend to the end
      setFriends([...friends, newFriend]);
      setId(id + 1);
      setName('');
      setAge('');
      setFavActivity('');
      Keyboard.dismiss();

    }
  
    return (
      <View style={styles.container}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>My Friends</Text>

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

            onPress={handleAdd}

            style={[styles.button, {marginLeft: 30, marginTop: 10}]}  

            underlayColor={colors.dark}>

            <View style={{alignItems: 'center'}}>

              <Text style={styles.buttonText}>Add Friend</Text>

            </View>

          </TouchableHighlight>

          
        </View>

  
        <FlatList
          data = {friends}
          keyExtractor={friend => friend.id.toString()}
          renderItem={({item}) => (
            <ListItem 
              name = {item.name}
              age = {item.age}
              favActivity = {item.favActivity}
              onPress = {() => console.log(item)}
              renderRightActions={() =>
                <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            

            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator color={colors.secondary}/>}
        
        />


      </View>
    );
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