import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../config/colors'

export default function ListItemSeparator({color=colors.dark}) {
  return (
    <View style={[styles.separator, {backgroundColor: color}]}/>
   
  )
}

const styles = StyleSheet.create({
    separator:{
        height:3,
        width:'100%',

    }
})