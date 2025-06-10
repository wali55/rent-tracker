import { ADD_RENT, ADD_RENTER, EDIT_RENTER, PAY_RENT } from "./actionTypes"

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