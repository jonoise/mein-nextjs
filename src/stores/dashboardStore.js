import create from 'zustand'
import {
    devtools
} from 'zustand/middleware'

const useDashboardStore = create(devtools((set, get) => ({
    dashboardSection: null,
    setDashboardSection: (section) => {
        set(state => ({
            ...state,
            dashboardSection: section
        }))
    }

})))

export default useDashboardStore