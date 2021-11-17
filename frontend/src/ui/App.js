import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { ProfilePage } from "./ProfilePage"
import { LandingPage } from './LandingPage'
import { FourOhFour } from './FourOhFour'
import { MainNav } from './shared/components/MainNav'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faUtensils} from "@fortawesome/free-solid-svg-icons";
library.add( faUtensils );



export const App = () => (
  <>
    <BrowserRouter>
      <MainNav />
      <Switch>
          <Route exact path='/landing-page' component={LandingPage} />
        <Route exact path='/' component={Home} />
          <Route exact path='/profile-page' component={ProfilePage} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>

  </>
)
