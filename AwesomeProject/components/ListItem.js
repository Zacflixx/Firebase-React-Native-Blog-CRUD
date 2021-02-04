import React from 'react';
import {View, Text , StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item}) => {
return (
   <TouchableOpacity style={styles.listItem}     >

      
<View style={styles.Listview}>

         <Text style={styles.ListText}> {item.name} </Text>
         <Icon name="remove" size={30} color ="firebrick" 
           />

</View>
    </TouchableOpacity>
  
);
};
// Header.defaultProps = {
//  title: 'Alabama List'
// }
const styles = StyleSheet.create({
listItem:{
padding:15,
backgroundColor: '#f8f8f8',
borderBottomWidth:1,
borderColor:'#eee',
},
listView:{
flexDirection:'row' ,
justifyContent: 'space-between',
alignItems:'center',
},
ListText:{
 fontSize:18,
}



  });

export default ListItem;