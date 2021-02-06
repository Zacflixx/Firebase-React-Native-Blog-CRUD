
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

        <Text style={styles.sectionTitle} >Today's tasks are </Text>
        <View style={styles.items} >

         <Text>  {/* this is where tasks will go indeed*/} </Text>  
         <Task text={'Task 1'}/>
         <Task text={'Task 2'}/>
         


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
  marginTop: 30,
},
});
