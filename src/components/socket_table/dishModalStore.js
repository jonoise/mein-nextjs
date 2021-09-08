import create from 'zustand'
import {
    devtools
} from 'zustand/middleware'

const useDishModalStore = create(devtools((set, get) => ({
    currentDishUUID: null,
    isOpen: false,
    setCurrentDishUUID: (uuid) => {
        set(state => ({
            ...state,
            currentDishUUID: uuid,
        }))
    },
    setIsOpen: (payload) => {
        set(state => ({
            ...state,
            isOpen: payload,
        }))
    },

})))

export default useDishModalStore