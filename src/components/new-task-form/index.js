import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import validate from 'validate.js'
import DateTimePicker from 'react-native-modal-datetime-picker'

import InputText from '../input-text'
import Picker from '../picker'
import ColorPicker from '../color-picker'
import Button from '../button'

import { arrayColors } from '../../theme/colors'
import styles from './styles'

import formKeys from '../../redux/forms'
import withState from './state'

const { NEW_TASK } = formKeys

const notificationOptions = [
  {
    key: 1,
    label: '10 mins before',
    value: 10,
  },
  {
    key: 2,
    label: '30 mins before',
    value: 30,
  },
  {
    key: 3,
    label: '1 hour before',
    value: 60,
  },
  {
    key: 4,
    label: '1 day before',
    value: 60 * 24,
  },
]

function NewTaskForm(props) {
  const {
    handleSubmit,
    submitting,
    onSubmit,
    confirmDate,
    setPickerVisible,
    isDatePickerVisible,
  } = props
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <Text style={styles.headText}>Create New Tasks</Text>
            <View style={styles.headLine} />
          </View>
          <View>
            <View style={styles.inputContainer}>
              <Field component={InputText} name="title" label="Topic" placeholder="Write Topic" />
            </View>
            <View style={styles.inputContainer}>
              <Field
                component={InputText}
                name="description"
                label="Description"
                placeholder="Write Description"
                multiline
              />
            </View>
            <TouchableOpacity onPress={() => setPickerVisible(true)}>
              <View style={[styles.inputContainer, styles.inputsDate]}>
                <View style={styles.layer} />
                <Field
                  component={InputText}
                  name="formatDate"
                  label="Date"
                  placeholder="Select Date"
                  disabled
                />
              </View>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Field
                component={Picker}
                name="notification"
                label="Notification"
                placeholder="Select Notification"
                options={notificationOptions}
              />
            </View>
            <View style={styles.inputContainer}>
              <Field
                component={ColorPicker}
                name="color"
                label="Choose color"
                colors={arrayColors}
              />
            </View>
          </View>
          <DateTimePicker
            isVisible={isDatePickerVisible}
            onConfirm={confirmDate}
            onCancel={() => setPickerVisible(false)}
            is24Hour
            minimumDate={new Date()}
            mode="datetime"
          />
        </View>
        <View>
          <Button disabled={submitting} text="ADD" onPress={handleSubmit(onSubmit)} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const constraints = {
  title: {
    presence: true,
  },
  description: {
    presence: true,
  },
  formatDate: {
    presence: true,
  },
  notification: {
    presence: true,
  },
  color: {
    presence: true,
  },
}

const loginForm = reduxForm({
  form: NEW_TASK,
  validate: values => validate(values.toJS(), constraints),
})(NewTaskForm)

export default withState(loginForm)
