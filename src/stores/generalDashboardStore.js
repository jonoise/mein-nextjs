import create from 'zustand'
import {
    devtools
} from 'zustand/middleware'

const useGeneralDashboardStore = create(devtools((set, get) => ({
    dashboardSection: null,
    restaurants: null,
    setDashboardSection: (section) => {
        set(state => ({
            ...state,
            dashboardSection: section
        }))
    },
    setDashboardRestaurants: (restaurants) => {
        set(state => ({
            ...state,
            restaurants
        }))
    },

})))

export default useGeneralDashboardStore