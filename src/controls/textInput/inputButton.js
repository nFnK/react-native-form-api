import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { scale } from '../../styles/common';

class InputButton extends PureComponent {
  static propTypes = {
    image: PropTypes.any,
    imageStyle: PropTypes.any,
    onPress: PropTypes.func,
  };

  onPress = () => {
    if (typeof this.props.onPress === 'function') {
      this.props.onPress();
    }
  };

  render() {
    const { image, imageStyle } = this.props;

    if (!image) return null;

    return (
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.imageContainer}
        onPress={this.onPress}
      >
        <Image
          style={[styles.image, imageStyle]}
          resizeMode={'contain'}
          source={image}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    top: scale(8),
    right: scale(15),
    zIndex: 10,
    width: scale(32),
    height: scale(32),
    justifyContent: 'center',
  },
  image: {
    height: scale(13),
    alignSelf: 'center',
  },
});

export default InputButton;
