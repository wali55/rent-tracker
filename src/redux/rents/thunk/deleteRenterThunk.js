import { deleteRenter, loading } from "../actions";

const deleteRenterThunk = (renterId) => {
  return async (dispatch) => {
    dispatch(loading(true));
    const res = await fetch(`http://localhost:9000/renters/${renterId}`, {
      method: "DELETE",
    });
    
    await res.json();

    dispatch(deleteRenter(renterId));
  };
};

export default deleteRenterThunk;
