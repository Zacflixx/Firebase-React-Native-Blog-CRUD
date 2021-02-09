import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Blogs extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>I am Blogggggs screen </Text>
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
