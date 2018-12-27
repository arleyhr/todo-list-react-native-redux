import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

function TaskItem({
  title, done, date, onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="check-circle" style={[styles.checkIcon, done ? styles.doneIcon : {}]} />
        </View>
        <Text
          style={[styles.textItem, done ? styles.textDone : {}]}
          textDecorationLine={done ? 'line-through' : 'none'}
        >
          {title}
        </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

TaskItem.propTypes = {
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  date: PropTypes.any.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default TaskItem
