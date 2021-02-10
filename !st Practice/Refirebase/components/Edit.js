import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Edit extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>I am Edit screen </Text>
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

export default Edit;
