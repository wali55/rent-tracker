import { useDispatch, useSelector } from "react-redux";
import { filterRenters } from "../redux/rents/actions";

const FilterRenter = () => {
  const dispatch = useDispatch();
  const selectedStatus = useSelector((state) => state.rents.selectedStatus);
  return (
    <div className="flex gap-2">
      <button onClick={() => dispatch(filterRenters("all"))} className={`text-xs ${selectedStatus === "all" ? "bg-cyan-900" : "bg-neutral-800"}  px-3 py-1.5 rounded-full font-medium hover:bg-cyan-950 cursor-pointer`}>
        সকল
      </button>
      <button onClick={() => dispatch(filterRenters("paid"))} className={`text-xs ${selectedStatus === "paid" ? "bg-cyan-900" : "bg-neutral-800"}  px-3 py-1.5 rounded-full font-medium hover:bg-cyan-950 cursor-pointer`}>
        পরিশোধিত
      </button>
      <button onClick={() => dispatch(filterRenters("due"))} className={`text-xs ${selectedStatus === "due" ? "bg-cyan-900" : "bg-neutral-800"}  px-3 py-1.5 rounded-full font-medium hover:bg-cyan-950 cursor-pointer`}>
        বকেয়া
      </button>
    </div>
  );
};

export default FilterRenter;
