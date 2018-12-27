import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'

import TaskItem from '../task-item'

import routerKeys from '../../router/keys'

const { TASK_DETAIL } = routerKeys

function renderItem({ item }) {
  return <TaskItem {...item} onPress={Actions[TASK_DETAIL]} />
}

function TasksList({ tasks }) {
  return <FlatList data={tasks} renderItem={renderItem} keyExtractor={item => item.id} />
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    done: PropTypes.bool,
    date: PropTypes.any,
  })).isRequired,
}

export default TasksList
