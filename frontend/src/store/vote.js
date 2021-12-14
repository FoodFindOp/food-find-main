import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: "votes",
  initialState: [],
  reducers: {
    setVote: (votes, action) => {
      votes.push(action.payload)
    }
  }
})

export const {setVote} = slice.actions

export default slice.reducer