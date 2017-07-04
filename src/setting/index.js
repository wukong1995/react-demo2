import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'

import Account from './account'
import * as stores from './stores'


class Settings extends React.Component {

  render() {
    return (
      <Provider {...stores}>
        <Account />
      </Provider>
    )
  }
};

export default Settings;
