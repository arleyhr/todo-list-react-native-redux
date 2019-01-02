import React from 'react'
import AwesomeAlert from 'react-native-awesome-alerts'

import LightBox from '../../components/light-box'
import TaskDetail from '../../components/task-detail'

import withStore from './store'

function TaskView({ currentTodo, setDoneStatus, requestDeleteTodo, isLoading }) {
  return (
    <LightBox>
      <TaskDetail
        todo={currentTodo}
        setDoneStatus={setDoneStatus}
        requestDeleteTodo={requestDeleteTodo}
      />
      <AwesomeAlert
        show={isLoading}
        showProgress
        title="Loading"
        closeOnTouchOutside
        closeOnHardwareBackPress={false}
      />
    </LightBox>
  )
}

export default withStore(TaskView)
