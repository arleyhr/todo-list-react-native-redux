import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'

import SwitchButton from '../../components/switch-button'
import TasksList from '../../components/tasks-list'

import styles from './styles'

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' }
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' }
const workout = { key: 'workout', color: 'green' }

const tasks = [
  {
    id: '1', title: 'test', description: 'test description', done: false, date: '26 Dec 10pm',
  },
  {
    id: '2', title: 'test 1', description: 'test description', done: true, date: '28 Dec 10pm',
  },
  {
    id: '3', title: 'test 2', description: 'test description', done: false, date: '27 Dec 10pm',
  },
]

function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.swithContainer}>
          <SwitchButton
            leftButtonText="Monthly"
            rightButtonText="Daily"
            onPressLeftButton={() => {}}
            onPressRightButton={() => {}}
          />
        </View>
        <Calendar
          markedDates={{
            '2018-12-27': { dots: [vacation, massage, workout] },
            '2018-12-28': { dots: [massage, workout] },
          }}
          markingType="multi-dot"
        />
        <Text style={styles.dateLabel}>10th Feb</Text>
        <View style={styles.tasksListContainer}>
          <TasksList tasks={tasks} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
