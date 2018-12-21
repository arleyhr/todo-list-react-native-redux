import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Scene, Router, Modal, Tabs, Lightbox, ActionConst } from 'react-native-router-flux'

import Login from '../screens/Login'
import Home from '../screens/Home'

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
} = routerKeys

class Navigation extends Component {
  componentDidMount() {}
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
                  icon={({ tintColor }) => <Icon name="clock" size={24} color={tintColor} />}
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
          {/* // LIGHTBOXES */}
        </Lightbox>
      </Router>
    )
  }
}

export default Navigation
