
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, 
  StatusBar,
} from 'react-native';
import Task from './components/Task';

export default function App() {
  

  return (
    <View style={styles.container}> 
    {/* //Today's task */}
    <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle} >Today's tasks </Text>
        <View style={styles.items} >

         <Text>  {/* this is where tasks will go*/} </Text>  
         <Task/>


         </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#E8EAED',  
  },
  taskWrapper: {
paddingTop: 80,
paddingHorizontal: 20,

  },
sectionTitle: {
fontSize: 24,
color: 'black',
fontWeight: 'bold',
},
items: {

},
});
