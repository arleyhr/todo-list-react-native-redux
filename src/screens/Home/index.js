import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Calendar } from 'react-native-calendars'

import SwitchButton from '../../components/switch-button'

import styles from './styles'

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' }
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' }
const workout = { key: 'workout', color: 'green' }

function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
