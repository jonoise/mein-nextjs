import {
  configureStore
} from '@reduxjs/toolkit'
import tableSlice from '../components/socket_table/tableSlice'

export const store = configureStore({
  reducer: {
    tableSlice: tableSlice
  }
})