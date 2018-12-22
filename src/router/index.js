import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Scene, Router, Modal, Tabs, Lightbox, ActionConst, Actions } from 'react-native-router-flux'

import Login from '../screens/login'
import Home from '../screens/home'
import NewTask from '../screens/new-task'

import CircleButton from '../components/circle-button'
import { logo } from '../libs/images'
import routerKeys from './keys'

import styles from './styles'

const {
  MAIN_TABS,
  LOGIN_SCREEN,
  HOME_SCREEN,
  SCHEDULE_SCREEN,
  ADD_SCREEN,
  NOTIFICATIONS_SCREEN,
  PROFILE_SCREEN,
  NEW_TASK_LIGHTBOX,
} = routerKeys

class Navigation extends Component {
  onAddButtonPress = () => {
    Actions[NEW_TASK_LIGHTBOX].call()
  }
  render() {
    return (
      <Router sceneStyle={styles.scene}>
        <Lightbox>
          <Modal>
            {/* MODALS */}
            <Scene key={LOGIN_SCREEN} title="Login" component={Login} hideNavBar />
            {/* // MODALS */}

            <Scene key={MAIN_TABS} hideNavBar type={ActionConst.REPLACE}>
              <Tabs
                showLabel={false}
                swipeEnabled
                inactiveTintColor={styles.inactiveTintColor}
                activeTintColor={styles.activeTintColor}
                tabBarStyle={styles.tabBarStyle}
                navigationBarStyle={styles.navigationBarStyle}
                navigationBarTitleImage={logo}
                navigationBarTitleImageStyle={styles.navigationBarTitleImageStyle}
                headerLayoutPreset="center"
              >
                <Scene
                  key={HOME_SCREEN}
                  component={Home}
                  icon={({ tintColor }) => <Icon name="list" size={24} color={tintColor} />}
                />
                <Scene
                  key={SCHEDULE_SCREEN}
                  component={Home}
                  icon={({ tintColor }) => <Icon name="clock" size={24} color={tintColor} />}
                />
                <Scene
                  key={ADD_SCREEN}
                  component={Home}
                  tabBarOnPress={() => null}
                  icon={() => (
                    <CircleButton
                      elevation
                      customStyles={styles.addButton}
                      iconName="plus"
                      onPress={this.onAddButtonPress}
                    />
                  )}
                />
                <Scene
                  key={NOTIFICATIONS_SCREEN}
                  component={Home}
                  icon={({ tintColor }) => <Icon name="bell" size={24} color={tintColor} />}
                />
                <Scene
                  key={PROFILE_SCREEN}
                  component={Home}
                  icon={({ tintColor }) => <Icon name="user" size={24} color={tintColor} />}
                />
              </Tabs>
            </Scene>
          </Modal>

          {/* LIGHTBOXES */}
          <Scene key={NEW_TASK_LIGHTBOX} component={NewTask} />
          {/* // LIGHTBOXES */}
        </Lightbox>
      </Router>
    )
  }
}

export default Navigation
