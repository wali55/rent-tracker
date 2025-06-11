import { useDispatch, useSelector } from "react-redux";
import { openDeleteRenterModal } from "../redux/rents/actions";
import deleteRenterThunk from "../redux/rents/thunk/deleteRenterThunk";

const DeleteRenterModal = () => {
  const dispatch = useDispatch();

  const renterId = useSelector((state) => state.rents.selectedRenterId);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteRenterThunk(String(renterId)));
    dispatch(openDeleteRenterModal(false));
  }

  return (
    <div>
      <div className="absolute bg-neutral-950 opacity-90 left-0 top-0 w-full h-full z-50"></div>
      <form
        onSubmit={handleSubmit}
        className="absolute p-4 bg-neutral-800 rounded-md z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[400px]"
      >
        <h2 className="py-2 font-semibold">ডিলিট ভাড়াটিয়া</h2>
        <p className="text-sm py-2">আপনিকি ভাড়াটিয়াটিকে ডিলিট করতে চান? </p>
        <div className="flex gap-2">
          <button onClick={() => dispatch(openDeleteRenterModal(false))} className="bg-rose-900 hover:bg-rose-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer">
            ক্লোজ করুন
          </button>
          <button
            type="submit"
            className="bg-cyan-900 hover:bg-cyan-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer"
          >
            ডিলিট করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteRenterModal;
