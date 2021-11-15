import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import { MainNav } from './shared/components/MainNav'

export const App = () => (
  <>
    <BrowserRouter>
      <MainNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>

  </>
)
