import { ADD_RENT, ADD_RENTER, EDIT_RENTER, FILTER_RENTERS, LOAD_RENTERS, LOADING, OPEN_ADD_RENT_MODAL, OPEN_DELETE_RENTER_MODAL, OPEN_EDIT_RENTER_MODAL, OPEN_PAY_RENT_MODAL, PAY_RENT, SET_RENTER_ID } from "./actionTypes"

export const loadRenters = (renters) => {
    return {
        type: LOAD_RENTERS,
        payload: renters
    }
}

export const addRenter = (renter) => {
    return {
        type: ADD_RENTER,
        payload: renter
    }
}

export const editRenter = (renterId, newRenter) => {
    return {
        type: EDIT_RENTER,
        payload: {
            renterId,
            newRenter
        }
    }
}

export const deleteRenter = (renterId) => {
    return {
        type: ADD_RENTER,
        payload: renterId
    }
}

export const addRent = (renterId, rent) => {
    return {
        type: ADD_RENT,
        payload: {
            renterId,
            rent
        }
    }
}

export const payRent = (renterId, payment) => {
    return {
        type: PAY_RENT,
        payload: {
            renterId,
            payment
        }
    }
}

export const setRenterId = (renterId) => {
    return {
        type: SET_RENTER_ID,
        payload: renterId
    }
}

export const openEditRenterModal = (condition) => {
    return {
        type: OPEN_EDIT_RENTER_MODAL,
        payload: condition
    }
}

export const openAddRentModal = (condition) => {
    return {
        type: OPEN_ADD_RENT_MODAL,
        payload: condition
    }
}

export const openPayRentModal = (condition) => {
    return {
        type: OPEN_PAY_RENT_MODAL,
        payload: condition
    }
}

export const openDeleteRenterModal = (condition) => {
    return {
        type: OPEN_DELETE_RENTER_MODAL,
        payload: condition
    }
}

export const loading = (condition) => {
    return {
        type: LOADING,
        payload: condition
    }
}

export const filterRenters = (status) => {
    return {
        type: FILTER_RENTERS,
        payload: status
    }
}