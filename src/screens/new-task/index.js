import React from 'react'

import LightBox from '../../components/light-box'
import NewTaskForm from '../../components/new-task-form'


function NewTask() {
  return (
    <LightBox noPadding >
      <NewTaskForm />
    </LightBox>
  )
}

export default NewTask
