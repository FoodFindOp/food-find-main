import {createSlice} from '@reduxjs/toolkit'
import { httpConfig } from '../ui/shared/utils/httpConfig'


const profileSlice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    getWholeProfileByProfileId: (profile, action) => {
      return action.payload
    },
  },
})

export const {getWholeProfileByProfileId} = profileSlice.actions
// Create an export to allow async calls to our action
export const fetchAllProfiles = () => async dispatch => {
  const {data} = await httpConfig(`/apis/profile/`)
  dispatch(getWholeProfileByProfileId(data))
}

export default profileSlice.reducer
