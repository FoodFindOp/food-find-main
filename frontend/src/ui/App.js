import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { ProfilePage } from './ProfilePage'
import { LandingPage } from './LandingPage'
import { SwiperPage } from './SwiperPage'
import { WinnerPage } from './WinnerPage'
import { FourOhFour } from './FourOhFour'
import { MainNav } from './shared/components/MainNav'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils, faClipboardCheck, faHome } from '@fortawesome/free-solid-svg-icons'
library.add(faUtensils, faClipboardCheck, faHome)

export const App = () => (
  <>
    <BrowserRouter>
      <MainNav/>
      <Switch>
        <Route exact path="/landing-page" component={LandingPage}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile-page" component={ProfilePage}/>
        <Route exact path="/swiper-page" component={SwiperPage}/>
        <Route exact path="/winner-page" component={WinnerPage}/>
        <Route component={FourOhFour}/>
      </Switch>
    </BrowserRouter>
  </>
)
