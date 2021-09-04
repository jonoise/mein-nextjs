import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    userAdded: false,
    table: null,
    session: null,
    users: [],
    dishes: [],
    totalAmount: 0,
}

const tableSlice = createSlice({
    initialState,
    name: 'tableSlice',
    reducers: {
        toggleUserAdded: (state) => {
            state.userAdded = !state.userAdded
        }
    }

})

export const {
    toggleUserAdded,
} = tableSlice.actions

export const selectTableSlice = state => state.tableSlice

export default tableSlice.reducer