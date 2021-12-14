import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Router, Switch } from 'react-router'
import { Home } from './home/Home'
import { ProfilePage } from './profile/ProfilePage'
import { LandingPage } from './landing/LandingPage'
import { SwiperPage } from './swiper/SwiperPage'
import { WinnerPage } from './winner/WinnerPage'
import { FourOhFour } from './404/FourOhFour'
import { MainNav } from './shared/components/mainnav/MainNav'
import socketIOClient from 'socket.io-client'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils, faClipboardCheck, faHome } from '@fortawesome/free-solid-svg-icons'
library.add(faUtensils, faClipboardCheck, faHome)

const history = createBrowserHistory()



export const App = (props) => {
  const { store } = props
  const socket = socketIOClient('/', {
    transports: ['websocket'],
    path: '/socket' // added this line of code
  })

  React.useEffect(() => {
    socket.on('connect', () => {
      console.log('connect')
    })
    socket.on('event', (data) => {
      console.log(data)
    })
  }, [socket])

  return (
    <>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <MainNav/>
          <Switch>
            <Route exact path="/landing-page" component={LandingPage}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile-page" component={ProfilePage}/>
            <Route exact path="/swiper-page/:sessionId" sessionId=":sessionId" component={SwiperPage}/>
            <Route exact path="/winner-page/:restaurantId" component={WinnerPage} restaurantId=":restaurantId"/>

            <Route component={FourOhFour}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  )
}
