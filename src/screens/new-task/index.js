import React from 'react'
import PropTypes from 'prop-types'
import AwesomeAlert from 'react-native-awesome-alerts'

import LightBox from '../../components/light-box'
import NewTaskForm from '../../components/new-task-form'

import withStore from './store'

function NewTask({ changeField, createTodo, isLoading }) {
  return (
    <LightBox noPadding>
      <NewTaskForm onSubmit={values => createTodo(values.toJS())} changeField={changeField} />
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

NewTask.propTypes = {
  changeField: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default withStore(NewTask)
