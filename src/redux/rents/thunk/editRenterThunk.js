import { editRenter } from "../actions";

const editRenterThunk = (renterId, renterData) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/renters/${renterId}`, {
      method: "PATCH",
      body: JSON.stringify({ ...renterData }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const renter = await res.json();

    dispatch(editRenter(renter.id, renter));
  };
};

export default editRenterThunk;
