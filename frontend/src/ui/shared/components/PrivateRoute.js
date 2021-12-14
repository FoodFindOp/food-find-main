import React from 'react'
import { Redirect, Route } from 'react-router'
import { useJwtToken } from '../useJwtHook'



export function PrivateRoute ({child, ...rest}) {
  const {authenticatedUser, isLoading} = useJwtToken()
  console.log(child)
  return (
    <>
      {
      isLoading
        ? <h3>Vote Session is Loading</h3>
          : <Route
            {...rest}
              render={({location}) => authenticatedUser
                ? (child)
                : (<Redirect to={{
                  pathname: "/profile-page",
                  state: {from: location}
                }}
                  />)
                }
    />
      }
    </>
  )
}