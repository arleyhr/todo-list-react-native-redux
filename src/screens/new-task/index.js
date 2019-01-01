import React from 'react'
import PropTypes from 'prop-types'

import LightBox from '../../components/light-box'
import NewTaskForm from '../../components/new-task-form'

import withStore from './store'

function NewTask({ changeField, createTodo }) {
  return (
    <LightBox noPadding>
      <NewTaskForm onSubmit={values => createTodo(values.toJS())} changeField={changeField} />
    </LightBox>
  )
}

NewTask.propTypes = {
  changeField: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
}

export default withStore(NewTask)
