import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'

import TaskItem from '../task-item'

import routerKeys from '../../router/keys'

const { TASK_DETAIL } = routerKeys

function TasksList({ tasks, onItemPress }) {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          {...item}
          onPress={() => {
            onItemPress(item)
            Actions[TASK_DETAIL].call()
          }}
        />
      )}
      keyExtractor={item => item.id}
    />
  )
}

TasksList.propTypes = {
  onItemPress: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    done: PropTypes.bool,
    date: PropTypes.any,
  })).isRequired,
}

export default TasksList
