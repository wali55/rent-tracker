import { deleteRenter } from "../actions";

const deleteRenterThunk = (renterId) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/renters/${renterId}`, {
      method: "DELETE",
    });
    
    await res.json();

    dispatch(deleteRenter(renterId));
  };
};

export default deleteRenterThunk;
