import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Button from '../button'

import styles from './styles'

function TaskDetail() {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={[styles.headColor, { backgroundColor: false || 'orange' }]} />
        <Text style={[styles.headText, styles.headTextDone]}>Meet Lorence</Text>
        <View style={styles.headLine} />
      </View>
      <View style={styles.subHeadContainer}>
        <View style={styles.calendarIconContainer}>
          <Icon name="calendar-clock" style={styles.calendarIcon} />
        </View>
        <Text style={styles.subHeadText}>3rd Feb - 6 pm</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          The monkey-rope is found in all whalers; but it was only in the Pequod that the monkey and
          his holder.
        </Text>
      </View>
      <View style={styles.statusContainer}>
        <Icon name="check-circle" style={styles.checkIcon} />
        <Text style={styles.statusText}>Completed</Text>
      </View>
      <View style={styles.actions}>
        <Button
          text="DELETE"
          customWidth="48%"
          customHeight={40}
          textStyles={styles.buttonText}
          onPress={() => {}}
          primaryColor={styles.deletePrimary}
          activeColor={styles.deleteActive}
        />
        <Button
          text="MARK AS DONE"
          customWidth="48%"
          customHeight={40}
          textStyles={styles.buttonText}
          onPress={() => {}}
          primaryColor={styles.donePrimary}
          activeColor={styles.doneActive}
        />
      </View>
    </View>
  )
}

TaskDetail.propTypes = {}

export default TaskDetail
