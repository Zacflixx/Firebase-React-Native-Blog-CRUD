import React, {useState} from 'react';
import {View, Text , StyleSheet, } from 'react-native';
import { FlatList } from 'react-native';
import Header from './components/Header';


const App = () => {
  const [people, setPeople] = useState([
  {name:  'Milk' , key:'1'},
  {name:  'Flour', key:'2' },
  {name:  'Bread', key:'3' },
  {name:  'Sugar', key:'4' },

]);

return (

<View
      style={styles.container}>

      <Header title='Shopping List'  />

      <FlatList style={styles.list} data={people} 
      renderItem={({ item })  => (
      <Text>{item.name}</Text>
      )}  />
   

    </View>
  
    
);
};

const styles = StyleSheet.create({
container:{
  flex:1,
  paddingTop: 30
},
list:{
  color: 'red',
  flex:1,
  paddingTop: 30
},

  });

export default App;