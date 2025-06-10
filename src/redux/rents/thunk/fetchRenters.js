import { loadRenters } from "../actions";

const fetchRenters = () => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:9000/renters");
        const renters = await res.json();

        dispatch(loadRenters(renters));
    }
}

export default fetchRenters;