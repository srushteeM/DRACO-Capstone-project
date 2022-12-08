import React, { Component } from 'react';
import { View, Text ,TextInput} from 'react-native';

class StoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
       <TextInput placeholder="Create Post"/>
      </View>
    );
  }
}

export default StoriesScreen;
