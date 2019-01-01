import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getFormatedDateTime } from '../../libs/moment'

import Button from '../button'

import styles from './styles'

function TaskDetail({ todo, requestDeleteTodo, setDoneStatus }) {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={[styles.headColor, { backgroundColor: todo.color }]} />
        <Text style={[styles.headText, styles.headTextDone]}>{todo.title}</Text>
        <View style={styles.headLine} />
      </View>
      <View style={styles.subHeadContainer}>
        <View style={styles.calendarIconContainer}>
          <Icon name="calendar-clock" style={styles.calendarIcon} />
        </View>
        <Text style={styles.subHeadText}>{getFormatedDateTime(todo.date)}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{todo.description}</Text>
      </View>
      {todo.done && (
        <View style={styles.statusContainer}>
          <Icon name="check-circle" style={styles.checkIcon} />
          <Text style={styles.statusText}>Completed</Text>
        </View>
      )}
      <View style={[styles.actions, todo.done && styles.actionsCenter]}>
        {!todo.done && (
          <Button
            text="DELETE"
            customWidth="48%"
            customHeight={40}
            textStyles={styles.buttonText}
            onPress={requestDeleteTodo}
            primaryColor={styles.deletePrimary}
            activeColor={styles.deleteActive}
          />
        )}
        <Button
          text={!todo.done ? 'MARK AS DONE' : 'UNCHECK'}
          customWidth="48%"
          customHeight={40}
          textStyles={styles.buttonText}
          onPress={setDoneStatus}
          primaryColor={!todo.done ? styles.donePrimary : styles.deletePrimary}
          activeColor={!todo.done ? styles.doneActive : styles.deleteActive}
        />
      </View>
    </View>
  )
}

TaskDetail.propTypes = {}

export default TaskDetail
