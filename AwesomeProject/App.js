import React from 'react';
import {View, Text ,Image, StyleSheet} from 'react-native';

const App = () => {
return (
   <View
      style={styles.container}
    >

      
      <Text style={styles.texter}> 
          Hello Curtis!
      </Text>
<Image source={{uri:'https://blog.crowdbotics.com/content/images/2020/03/React-Firebase-Featured-Image.png'}} style={styles.img}/>


    </View>
  
    
);
};

const styles = StyleSheet.create({
container:{
  flex:1, 
  justifyContent: 'center', 
  alignItems :'center'},

texter: {
    color:'darkslateblue', 
    fontSize: 30 },

img:{
      width: 200,
      height: 100,
      borderRadius:200 / 1

    }
  });

export default App;