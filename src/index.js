import React, { Component } from 'react';
import { PlaySoundRepeat } from 'react-native-play-sound';
import { TouchableHighlight, Image, View, Text } from 'react-native';
import { IconVini } from './assets';

export default class App extends Component {
   onPressButton = () => {
     return PlaySoundRepeat('music');
   }

  render() {
    return (
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'lightgrey'
      }}>
        <TouchableHighlight
          underlayColor='#fff'
          onPress={this.onPressButton}
          style={{ backgroundColor: 'red'}}
          >
            <Image source={IconVini}  />
          </TouchableHighlight>
      </View>
    );
  }
}
