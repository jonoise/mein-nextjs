import create from 'zustand'
import {
    devtools
} from 'zustand/middleware'


const tableUserStore = set => ({
    id: null,
    name: "",
    tableNumber: null,
    dishes: [],
    setUserId: (id) => {
        set(state => ({
            id
        }))
    },
    setUserName: (name) => {
        set(state => ({
            name
        }))
    },
    setUserTableNumber: (tableNumber) => {
        set(state => ({
            tableNumber
        }))
    },
    addUserDish: (dish) => {
        set(state => ({
            dishes: [...state.dishes, dish]
        }))
    },
    editUserDish: (editDish) => {
        set(state => {
            const dishes = state.dishes.map(dish => {
                if (dish.id === editDish.id) {
                    dish = editDish
                }
            })
            return {
                dishes
            }
        })
    },
    deleteUserDish: (deletedDish) => {
        set(state => {
            const filteredDishes = state.dishes.filter(dish => dish.id !== deletedDish)
            return {
                dishes: filteredDishes
            }
        })
    }
})

const tableUserStore = create(devtools(tableUserStore))