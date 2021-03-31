import React, {Component} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class App extends Component {
  constructor() {
    super();
    this.state = {intializing: true, user: null};
  }
  onAuthStateChanged = user => {
    console.log(user);
    // setUser(user);
    // if (initializing) setInitializing(false);
  };
  componentDidMount() {
    auth().onAuthStateChanged(this.onAuthStateChanged);
  }
  render() {
    return (
      <View>
        <Text>Apaps</Text>
      </View>
    );
  }
}
