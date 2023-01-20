/* eslint-disable no-plusplus */

import { createSlice } from '@reduxjs/toolkit'

const initialState = { amount: 0, showCounter: true }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.amount++
    },
    decrement(state) {
      state.amount--
    },
    increase(state, action) {
      state.amount += action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

export const { increment, decrement, toggleCounter, increase } = counterSlice.actions

export const getCounter = (state: any) => state.counter.amount
export const getIsCounterShow = (state: any) => state.counter.showCounter

export default counterSlice.reducer
