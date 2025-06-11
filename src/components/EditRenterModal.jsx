import { useDispatch, useSelector } from "react-redux";
import { openEditRenterModal } from "../redux/rents/actions";
import { useState } from "react";
import editRenterThunk from "../redux/rents/thunk/editRenterThunk";

const EditRenterModal = () => {
  const dispatch = useDispatch();

  const renters = useSelector((state) => state.rents.renters);
  const renterId = useSelector((state) => state.rents.selectedRenterId);
  const renter = renters.find((renter) => renter.id === String(renterId));

  const initialData = {
    name: renter.name || "",
    apartment: renter.apartment || "",
    mobile: renter.mobile || "",
    baseRent: renter.baseRent.toString() || ""
  }

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value.trim()
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editRenterThunk(renter.id, formData));
    dispatch(openEditRenterModal(false));
  }

  return (
    <div>
      <div className="absolute bg-neutral-950 opacity-90 left-0 top-0 w-full h-full z-50"></div>
      <form
        onSubmit={handleSubmit}
        className="absolute p-4 bg-neutral-800 rounded-md z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[400px]"
      >
        <h2 className="py-2 font-semibold">ভাড়াটিয়া</h2>
        <div className="flex flex-col gap-2">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name">নাম</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}  className="border rounded-md p-1" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="apartment">এপার্টমেন্ট</label>
            <input type="text" id="apartment" name="apartment" value={formData.apartment} onChange={handleChange} className="border rounded-md p-1" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="mobile">মোবাইল</label>
            <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="border rounded-md p-1" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="baseRent">বেসিক ভাড়া (টাকা)</label>
            <input type="text" id="baseRent" name="baseRent" value={formData.baseRent} onChange={handleChange} className="border rounded-md p-1" />
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => dispatch(openEditRenterModal(false))} className="bg-rose-900 hover:bg-rose-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer">
            ক্লোজ করুন
          </button>
          <button type="submit" className="bg-cyan-900 hover:bg-cyan-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer">
            এডিট করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRenterModal;
