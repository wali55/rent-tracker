import { loading, loadRenters } from "../actions";

const fetchRenters = () => {
    return async (dispatch) => {
        dispatch(loading(true));
        const res = await fetch("http://localhost:9000/renters");
        const renters = await res.json();

        dispatch(loadRenters(renters));
    }
}

export default fetchRenters;