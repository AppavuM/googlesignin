import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

export default class App extends Component {
  constructor() {
    super();
    this.state = {intializing: true, user: null};
  }

  async componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '173815811052-t1iecir98nsn9sh8js347q6vf85arcgq.apps.googleusercontent.com',
    });
  }
  async onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('token', idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('token', googleCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  render() {
    return (
      <View>
        <Text>Apaps</Text>
        <Button
          title="Google Sign-In"
          onPress={async () => {
            try {
              const response = await this.onGoogleButtonPress();
              console.log('Signed in with Google!', response);
            } catch (e) {
              console.log('errro', e);
            }
          }}
        />
      </View>
    );
  }
}
