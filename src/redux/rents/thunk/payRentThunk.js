import { loading, payRent } from "../actions";

const payRentThunk = (renterId, renter, payment) => {
    const updatedStatus = parseInt(payment.remainingAmount) > 0 ? "due" : "paid";
    return async (dispatch) => {
        dispatch(loading(true));
        const res = await fetch(`http://localhost:9000/renters/${renterId}`, {
            method: "PATCH",
            body: JSON.stringify({...renter, lastPaymentDate: payment.paymentDate, dueAmount: parseInt(payment.remainingAmount), status: updatedStatus}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const updatedRenter = await res.json();

        dispatch(payRent(updatedRenter.id, payment));
    }
}

export default payRentThunk;