import * as React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight,
} from 'react-native';

import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-regular-400.ttf';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  circleBottun: {
    width: 48,
    height: 48,
    margin: 8,
    backgroundColor: '#ffc0cb',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1f1518',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    elevation: 4,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 25,
    lineHeight: 32,
    color: '#fff',
  },
});

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    const { style, color, onPress } = this.props;

    let bgColor = '#ffc0cb';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#ffc0cb';
    }
    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleBottun, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                {this.props.children}
              </Text>
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

export default CircleButton;
