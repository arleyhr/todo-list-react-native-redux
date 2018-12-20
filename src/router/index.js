import React, { Component } from 'react'

import { Scene, Router, Modal, Tabs, Lightbox, ActionConst } from 'react-native-router-flux'

import Login from '../screens/Login'
import Home from '../screens/Home'

import routerKeys from './keys'

import styles from './styles'

const { MAIN_TABS, LOGIN_SCREEN, HOME_SCREEN } = routerKeys

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
              <Tabs swipeEnabled>
                <Scene key={HOME_SCREEN} component={Home} />
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
