import create from 'zustand'
import {
    devtools
} from 'zustand/middleware'

const useTableStore = create(devtools((set, get) => ({
    instance_uuid: null,
    userAdded: false,
    tableNumber: null,
    session: null,
    currentUser: "",
    users: [],
    dishes: [],
    totalAmount: 0,
    toggleUserAdded: () => set(state => ({
        ...state,
        userAdded: !userAdded
    })),
    initTable: (payload) => {
        set(state => ({
            ...state,
            instance_uuid: payload.tableInstance,
            tableNumber: payload.tableNumber,
        }))
    },
    setCurrentUser: (payload) => {
        set((state) => ({
            ...state,
            currentUser: payload
        }))
    }
})))

export default useTableStore