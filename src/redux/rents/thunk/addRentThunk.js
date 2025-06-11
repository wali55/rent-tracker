import { addRent, loading } from "../actions";

const addRentThunk = (renterId, renter, rent) => {
    return async (dispatch) => {
        dispatch(loading(true));
        const res = await fetch(`http://localhost:9000/renters/${renterId}`, {
            method: "PATCH",
            body: JSON.stringify({...renter, lastRentMonth: rent.month, dueAmount: parseInt(renter.dueAmount) + parseInt(rent.totalBill), status: "due"}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const updatedRenter = await res.json();

        dispatch(addRent(updatedRenter.id, rent));
    }
}

export default addRentThunk;