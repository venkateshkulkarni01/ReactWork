import React from 'react';
import axios from 'axios';
import { Button, Text, View, StyleSheet } from 'react-native';


export default class App extends React.Component {

  constructor(props) {
    super(props),
      this.state = {
        text: []
      };
  }

  render() {

    return (
      <View style={styles.container}>
        <Button title="Post Data" onPress={this._postData} />
        <Text style={styles.welcome}>{this.state.text}</Text>
      </View>
    )
  }



  _postData = async () => {

      let formData = new FormData();
      formData.append('clientId', 1212);
      formData.append('clntRltnshpNmbr', null);
      formData.append('contractNmbr', null);
      formData.append('externalContractNmbr', null);
      formData.append('staffId', null);
      formData.append('govermentId', null);

      fetch('https://api.pilot.xyz.com/pisys_mob_account/quickPolicyInfo', {
          method: 'POST',
          headers: {
              'Authorization': 'Bearer Mi9qDv22EAiRnYA1fVX2DYlGDL3c',
              'Content-Type': 'application/json',
              'Accept-Language': 'En',
              'userName':'M214254',
          },
          body: formData
      }).then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson)
          this.setState({
            text: JSON.stringify(responseJson)[0].clntRltnshpNmbr })
      })
          .catch((error) => {
              console.log(error)
              this.setState({ text: error })
          });
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


