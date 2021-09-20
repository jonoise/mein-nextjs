import create from 'zustand'
import {
    devtools
} from 'zustand/middleware'

const useTableStore = create(devtools((set, get) => ({
    instance_uuid: null,
    tableNumber: null,
    restaurant: null,
    menu: null,
    stateCategory: null,
    currentUser: null,
    users: {},
    usersIds: [],
    totalAmount: 0,
    initTable: (payload) => {
        set(state => ({
            ...state,
            instance_uuid: payload.instance_uuid,
            tableNumber: payload.tableNumber,
        }))
    },
    setRestaurant: (restaurant) => {
        set(state => ({
            ...state,
            restaurant: restaurant
        }))
    },
    setMenu: (menu) => {
        set(state => ({
            ...state,
            menu: menu
        }))
    },
    setStateCategory: (category) => {
        set(state => ({
            ...state,
            stateCategory: category
        }))
    },
    addUser: (newUser) => {
        set(state => ({
            ...state,
            currentUser: newUser,
            users: {
                ...state.users,
                [newUser.id]: newUser
            },
            usersIds: [...state.usersIds, newUser.id]
        }))
    },
    setAddDish: (id, dish) => {
        set(state => {
            const newList = users.map(user => {
                if (user.id === id) {
                    user.dishes.push(dish)
                }
            })
            return {
                ...state,
                users: newList
            }
        })
    }
})))

export default useTableStore