import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {ProfilePage} from "./ProfilePage";

export const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/profile-page' component={ProfilePage} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>

  </>
)
