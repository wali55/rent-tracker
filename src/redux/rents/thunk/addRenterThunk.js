import { addRenter, loading } from "../actions";

const addRenterThunk = (renterData) => {
    return async (dispatch) => {
        dispatch(loading(true));
        const res = await fetch("http://localhost:9000/renters", {
            method: "POST",
            body: JSON.stringify({...renterData, lastRentMonth: "", lastPaymentDate: "", dueAmount: 0, status: "paid"}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const renter = await res.json();

        dispatch(addRenter(renter));
    }
}

export default addRenterThunk;