import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import { LandingPage } from './LandingPage';
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faUtensils} from "@fortawesome/free-solid-svg-icons";
library.add( faUtensils );



export const App = () => (
  <>
    <BrowserRouter>
      <Switch>
          <Route exact path='/landing-page' component={LandingPage} />
        <Route exact path='/' component={Home} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>

  </>
)
