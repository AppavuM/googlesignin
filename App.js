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
        '173815811052-h1i21ekia21iq3n09ek1sndcetbm1694.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });
  }

  async onGoogleButtonPress() {
    // Get the users ID token
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('idToken', userInfo);
      // Create a Google credential with the token
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // console.log('googleCredential', googleCredential);
      //
      // // Sign-in the user with the credential
      // return auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log('token error', e);
    }
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
