import { editRenter, loading } from "../actions";

const editRenterThunk = (renterId, renterData) => {
  return async (dispatch) => {
    dispatch(loading(true));
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
