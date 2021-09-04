import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    instance_uuid: null,
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
        },
        setTableInstance: (state, action) => {
            state.instance_uuid = action.payload
        }
    }

})

export const {
    toggleUserAdded,
    setTableInstance
} = tableSlice.actions

export const selectTableSlice = state => state.tableSlice

export default tableSlice.reducer