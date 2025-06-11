import { useDispatch, useSelector } from "react-redux";
import { openAddRentModal } from "../redux/rents/actions";
import { useState } from "react";
import { months } from "../data";
import addRentThunk from "../redux/rents/thunk/addRentThunk";

const AddRentModal = () => {
  const dispatch = useDispatch();

  const renters = useSelector((state) => state.rents.renters);
  const renterId = useSelector((state) => state.rents.selectedRenterId);
  const renter = renters.find((renter) => renter.id === String(renterId));

  const initialState = {
    name: renter.name || "",
    apartment: renter.apartment || "",
    baseRent: renter.baseRent || "",
    month: "",
    electricityBill: 0,
    gasBill: 0,
    waterBill: 0,
    totalBill: 0,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = [
      "baseRent",
      "electricityBill",
      "gasBill",
      "waterBill",
    ];

    const newValue = numericFields.includes(name)
      ? parseInt(value || 0)
      : value;

    const updatedForm = {
      ...formData,
      [name]: newValue,
    };

    const baseRent = parseInt(updatedForm.baseRent) || 0;
    const electricityBill = parseInt(updatedForm.electricityBill) || 0;
    const gasBill = parseInt(updatedForm.gasBill) || 0;
    const waterBill = parseInt(updatedForm.waterBill) || 0;

    updatedForm.totalBill = baseRent + electricityBill + gasBill + waterBill;

    setFormData(updatedForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRentThunk(renter.id, renter, formData));
    dispatch(openAddRentModal(false));
  }

  return (
    <div>
      <div className="absolute bg-neutral-950 opacity-90 left-0 top-0 w-full h-full z-50"></div>
      <form onSubmit={handleSubmit} className="absolute p-4 bg-neutral-800 rounded-md z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[400px]">
        <h2 className="py-2 font-semibold">মাসিক ভাড়া এড</h2>
        <div className="flex flex-col gap-2">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name">নাম</label>
            <input
              disabled
              type="text"
              id="name"
              name="name"
              value={formData.name}
              className="border rounded-md p-1 disabled:text-neutral-400"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="apartment">এপার্টমেন্ট</label>
            <input
              disabled
              type="text"
              id="apartment"
              name="apartment"
              value={formData.apartment}
              className="border rounded-md p-1 disabled:text-neutral-400"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="baseRent">বেসিক ভাড়া (টাকা)</label>
            <input
              disabled
              type="text"
              id="baseRent"
              name="baseRent"
              value={formData.baseRent}
              className="border rounded-md p-1 disabled:text-neutral-400"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="month">মাস</label>
            <select
              name="month"
              id="month"
              value={formData.month}
              onChange={handleChange}
              className="border rounded-md p-1"
            > 
              <option
                  className="bg-neutral-800"
                  value=""
                >
                  মাস সিলেক্ট করুন
                </option>
              {months.map((month) => (
                <option
                  className="bg-neutral-800"
                  key={month.id}
                  value={month.month}
                >
                  {month.month}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="electricityBill">ইলেকট্রিসিটি বিল (টাকা)</label>
            <input
              type="text"
              id="electricityBill"
              name="electricityBill"
              value={formData.electricityBill}
              onChange={handleChange}
              className="border rounded-md p-1"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="gasBill">গ্যাস বিল (টাকা)</label>
            <input
              type="text"
              id="gasBill"
              name="gasBill"
              value={formData.gasBill}
              onChange={handleChange}
              className="border rounded-md p-1"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="waterBill">পানির বিল (টাকা)</label>
            <input
              type="text"
              id="waterBill"
              name="waterBill"
              value={formData.waterBill}
              onChange={handleChange}
              className="border rounded-md p-1"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="totalBill">টোটাল বিল (টাকা)</label>
            <input
              disabled
              type="text"
              id="totalBill"
              name="totalBill"
              value={formData.totalBill}
              className="border rounded-md p-1 disabled:text-neutral-400"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(openAddRentModal(false))}
            className="bg-rose-900 hover:bg-rose-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer"
          >
            ক্লোজ করুন
          </button>
          <button type="submit" className="bg-cyan-900 hover:bg-cyan-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer">
            এড করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRentModal;
