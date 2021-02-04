import { Button } from 'react-native';
import React, {useState} from 'react';
import {View, Text , StyleSheet, } from 'react-native';
import { FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'


const App = () => {
  const [items, setItems] = useState([
  {name:  'Milk' , key:'1'},
  {name:  'Flour', key:'2' },
  {name:  'Bread', key:'3' },
  {name:  'Sugar', key:'4' },
  {name:  'Nut' , key:'5'},
  {name:  'Rice' , key:'10'},
  {name:  'ginger', key:'20' },
  {name:  'Gonot', key:'30' },
  {name:  'Nutella', key:'40' },
  {name:  'Bowl' , key:'50'}

]);


return (

<View
      style={styles.container}>

      <Header title='Shopping List'  />


      <FlatList  data={items} 
      renderItem={({ item })  => (<ListItem item={item} />
      )}  />
   

    </View>
  
    
);
};

const styles = StyleSheet.create({
container:{
  flex:1,
  paddingTop: 30
},


  });

export default App;