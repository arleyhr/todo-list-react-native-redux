import React from 'react'
import PropTypes from 'prop-types'

import { Animated, Easing } from 'react-native'

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
    marginTop: new Animated.Value(250),
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 300,
    }).start()

    Animated.spring(this.state.marginTop, {
      toValue: 0,
      duration: 500,
      easing: Easing.quad(),
    }).start()
  }

  render() {
    const { fadeAnim, marginTop } = this.state

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
          marginTop,
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

FadeInView.defaultProps = {
  style: {},
}

FadeInView.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}

export default FadeInView
