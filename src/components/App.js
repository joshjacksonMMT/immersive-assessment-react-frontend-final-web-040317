import React, { Component } from 'react'

//Components
import AccountContainer from './AccountContainer'


class App extends Component
{
  render()
  {
    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer />

      </div>
    );
  }
}

export default App
