import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Edit from './Edit';

class Blogs extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>I am Blogs screen </Text>
        <Button
          title="Go to Edit"
          onPress={() => this.props.navigation.navigate('Edit')} //(from routes)
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Blogs;
