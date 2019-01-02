import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import AwesomeAlert from 'react-native-awesome-alerts'

import SwitchButton from '../../components/switch-button'
import TasksList from '../../components/tasks-list'

import styles from './styles'

import withStore from './store'

function Home({
  todos,
  isAppLoading,
  setCurrentTodo,
  groupByDate,
  todosByDay,
  todosByDate,
  todosByMonth,
  currentMonthTodos,
  currentDayTodos,
  selectedDate,
}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.swithContainer}>
          <SwitchButton
            leftButtonText="Monthly"
            rightButtonText="Daily"
            onPressLeftButton={currentMonthTodos}
            onPressRightButton={currentDayTodos}
          />
        </View>
        <Calendar
          onDayPress={todosByDay}
          onMonthChange={todosByMonth}
          style={styles.calendar}
          markedDates={groupByDate}
          markingType="multi-dot"
        />
        <Text style={styles.dateLabel}>Todos - {selectedDate}</Text>
        <View style={styles.tasksListContainer}>
          {todos.length ? (
            <TasksList tasks={todosByDate || todos} onItemPress={setCurrentTodo} />
          ) : (
            <Text style={styles.noTodos}>No todos</Text>
          )}
          {todosByDate && !todosByDate.length && <Text style={styles.noTodos}>No todos</Text>}
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
