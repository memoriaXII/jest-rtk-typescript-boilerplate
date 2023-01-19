import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state: any, action: any) => {
      const newTask: any = {
        id: new Date(),
        name: action.payload.task,
      }
      state.push(newTask)
    },
    deleteTask: (state, action) => state.filter((item: any) => item.id !== action.payload.id),
  },
})

export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
