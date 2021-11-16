import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'

import {ProfilePage} from "./ProfilePage";

import { MainNav } from './shared/components/MainNav'


export const App = () => (
  <>
    <BrowserRouter>
      <MainNav />
      <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/profile-page' component={ProfilePage} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>

  </>
)
