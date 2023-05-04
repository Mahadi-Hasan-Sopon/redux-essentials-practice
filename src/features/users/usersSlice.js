import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tuhin Ahammed' },
  { id: '1', name: 'Sajib Datta' },
  { id: '2', name: 'Mahadi Hasan' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

//export const {} = usersSlice.actions

export default usersSlice.reducer