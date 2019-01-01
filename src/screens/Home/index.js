import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import AwesomeAlert from 'react-native-awesome-alerts'

import SwitchButton from '../../components/switch-button'
import TasksList from '../../components/tasks-list'

import styles from './styles'

import withStore from './store'

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' }
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' }
const workout = { key: 'workout', color: 'green' }

function Home({ todos, isAppLoading, setCurrentTodo }) {
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
          style={styles.calendar}
          markedDates={{
            '2018-12-27': { dots: [vacation, massage, workout] },
            '2018-12-28': { dots: [massage, workout] },
          }}
          markingType="multi-dot"
        />
        <Text style={styles.dateLabel}>Todos</Text>
        <View style={styles.tasksListContainer}>
          {todos.length ? (
            <TasksList tasks={todos} onItemPress={setCurrentTodo} />
          ) : (
            <Text style={styles.noTodos}>No todos</Text>
          )}
        </View>
      </ScrollView>
      <AwesomeAlert
        show={isAppLoading}
        showProgress
        title="Loading"
        closeOnTouchOutside
        closeOnHardwareBackPress={false}
      />
    </SafeAreaView>
  )
}

export default withStore(Home)
