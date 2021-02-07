
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

        <Text style={styles.sectionTitle} >Today's Tasks </Text>
        <View style={styles.items} >

         <Text>  {/* this is where tasks will go indeed */} </Text> 
         <ScrollView style={styles.scroller}> 
         <Task text={'Task 1'}/>
         <Task text={'Task 2'}/>
         <Task text={'Task 3'}/>
         <Task text={'Task 4'}/> 
         <Task text={'Task 5'}/>
         <Task text={'Task 6'}/>
         <Task text={'Task 7'}/>
         <Task text={'Task 8'}/>
         <Task text={'Task 9'}/>
         <Task text={'Task 10'}/>
         
         </ScrollView>


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
alignSelf: 'center',

},
items: {
  marginTop: 20,
  marginBottom: 120,

},
scroller: {
  backgroundColor: '#d6f2ff',
  paddingTop: 20,
  paddingBottom: 2,
  borderColor: '#55BCF6',
borderWidth: 2,
borderRadius: 5,
},
});
