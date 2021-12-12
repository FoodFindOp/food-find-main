import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './home/Home'
import { ProfilePage } from './profile/ProfilePage'
import { LandingPage } from './landing/LandingPage'
import { SwiperPage } from './swiper/SwiperPage'
import { WinnerPage } from './winner/WinnerPage'
import { FourOhFour } from './404/FourOhFour'
import { MainNav } from './shared/components/mainnav/MainNav'
import { RestaurantReviews } from './winner/restaurantReviews'
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils, faClipboardCheck, faHome } from '@fortawesome/free-solid-svg-icons'
import { WinnerCard } from './shared/WinnerCard'
library.add(faUtensils, faClipboardCheck, faHome)


export const App = (store) => (
  <>
    <Provider store={store} >
    <BrowserRouter>
      <MainNav/>
      <Switch>
        <Route exact path="/landing-page" component={LandingPage}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile-page" component={ProfilePage}/>
        <Route exact path="/swiper-page" component={SwiperPage}/>
        <Route exact path="/winner-page/:restaurantId" component={WinnerPage} restaurantId=":restaurantId"/>

        <Route component={FourOhFour}/>
      </Switch>
    </BrowserRouter>
    </Provider>
  </>
)
