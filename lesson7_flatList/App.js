import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import colors from './app/config/colors';
import ListItem from './app/components/ListItem';
import ListItemSeparator from './app/components/ListItemSeparator';

export default function App() {

  // this is the array we will use for the example on FlatLists
    const friends = [
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
  
    return (
      <View style={styles.container}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>My Friends</Text>
       {/* First we will design ONE row of our FlatList*/}
        {/* <View style={styles.listItemContainer}>
          <Text style={[styles.itemText, {fontSize: 16, fontWeight: 'bold'}]}>Bob, 44</Text>
          <Text style={[styles.itemText, {color: colors.secondary}]}>Hockey</Text>
        </View> */}
       {/* Then we will take this code and use it to build a ListItem component*/}
       {/* Next we will add one ListItem component to ensure the code is how we want*/}
       {/* <ListItem name="Jason" age="17" favActivity="Eating" onPress={() => console.log("pressed Jason")}/> */}
       {/* Replace that code with a FlatList that has the array of friends as its data*/}
       {/* Create a ListItemSeparator component that can go between ListItems */}
  
       {/* Begin to interact with our FlatList (more to come!) */}
  
        <FlatList
          data = {friends}
          keyExtractor={friend => friend.id.toString()}
          renderItem={({item}) => (
            <ListItem 
              name = {item.name}
              age = {item.age}
              favActivity = {item.favActivity}
              onPress = {() => console.log(item)}
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
    }
  });