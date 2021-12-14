import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from '../ui/shared/utils/httpConfig'

const sessionSlice = createSlice( {
  name: "session",
    initialState: [],
    reducers: {
    getSessionBySessionId: (session, action) => {
      return action.payload
    },
      getSessionBySocketId: (session, action) => {
      return action.payload
      },
      getSessionByProfileId: (session, action) => {
        return action.payload
    }

  }
})

export const {getSessionBySessionId, getSessionBySocketId, getSessionByProfileId} = sessionSlice.actions

export const fetchSessionBySessionId = () => async dispatch => {
  const {data} = await httpConfig(`/apis/session/`);
  dispatch (getSessionBySessionId(data))
}

export const fetchSessionBySocketId = () => async dispatch => {
  const {data} = await httpConfig(`/apis/session/sessionSocketId/:sessionSocketId`);
  dispatch (getSessionBySocketId(data))
}

export const fetchSessionByProfileId = () => async dispatch => {
  const {data} = await httpConfig(`/apis/session/sessionProfileId/:sessionProfileId`);
  dispatch (getSessionByProfileId(data))
}


export default sessionSlice.reducer