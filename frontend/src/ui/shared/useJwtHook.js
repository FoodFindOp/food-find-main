import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../../store/auth'

/**
 * A custom hook to handle grabbing pertinent information from the jwt token stored in redux
 *
 * @returns {{authenticatedUser: {profileId: string, profileEmail: boolean, profileName: string, loginTime } | null, isLoading: boolean}} an object containing the auth object from the JWT token stored in redux | null if the user is not logged in, and a helper flag to help with react rendering and redirects
 */

export function useJwtToken () {

  const [isLoading, setIsLoading] = React.useState(true)
  const authenticatedUser = useSelector((state) =>state.auth?.profile ? state.auth.profile : null)


  const dispatch = useDispatch();

  const initialEffects =  () => {
    async function getAuthFromRedux () {
      await dispatch(fetchAuth())
      setIsLoading(false)

    }
    getAuthFromRedux().catch(onerror => {console.error(onerror)})
  }

  React.useEffect(initialEffects, [dispatch])
  return {authenticatedUser, isLoading}

}