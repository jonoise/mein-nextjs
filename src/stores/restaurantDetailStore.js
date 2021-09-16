import create from 'zustand'
import {
    devtools
} from 'zustand/middleware'

const restaurantDetailStore = create(devtools((set, get) => ({
    restaurant: null,
    setRestaurant: (restaurant) => {
        set(state => ({
            ...state,
            restaurant
        }))
    },

})))

export default restaurantDetailStore