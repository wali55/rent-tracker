import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openPayRentModal } from "../redux/rents/actions";
import payRentThunk from "../redux/rents/thunk/payRentThunk";

const PayRentModal = () => {
  const dispatch = useDispatch();

  const renters = useSelector((state) => state.rents.renters);
  const renterId = useSelector((state) => state.rents.selectedRenterId);
  const renter = renters.find((renter) => renter.id === String(renterId));

  const initialState = {
    name: renter.name || "",
    apartment: renter.apartment || "",
    paymentDate: "",
    dueAmount: renter.dueAmount || 0,
    paidAmount: 0,
    remainingAmount: 0,
  };

  const [formData, setFormData] = useState(initialState);



  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = [
      "dueAmount",
      "paidAmount",
    ];

    const newValue = numericFields.includes(name)
      ? parseInt(value || 0)
      : value;
    
    const updatedForm = {
      ...formData,
      [name]: newValue,
    };

    const dueAmount = parseInt(updatedForm.dueAmount) || 0;
    const paidAmount = parseInt(updatedForm.paidAmount) || 0;

    updatedForm.remainingAmount = dueAmount - paidAmount;

    setFormData(updatedForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(payRentThunk(renter.id, renter, formData));
    dispatch(openPayRentModal(false));
  }


  console.log("formData updated:", formData);




  return (
    <div>
        <div className="absolute bg-neutral-950 opacity-90 left-0 top-0 w-full h-full z-50"></div>
        <form
          onSubmit={handleSubmit}
          className="absolute p-4 bg-neutral-800 rounded-md z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[400px]"
        >
          <h2 className="py-2 font-semibold">ভাড়া পেমেন্ট</h2>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="name">নাম</label>
              <input disabled type="text" id="name" name="name" value={formData.name} className="border rounded-md p-1 disabled:text-neutral-400" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="apartment">এপার্টমেন্ট</label>
              <input disabled type="text" id="apartment" name="apartment" value={formData.apartment} className="border rounded-md p-1 disabled:text-neutral-400" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="paymentDate">পেমেন্টের তারিখ</label>
              <input type="date" id="paymentDate" name="paymentDate" value={formData.paymentDate} onChange={handleChange} className="border rounded-md p-1" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="dueAmount">বকেয়া ভাড়া (টাকা)</label>
              <input disabled type="text" id="dueAmount" name="dueAmount" value={formData.dueAmount} className="border rounded-md p-1 disabled:text-neutral-400" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="paidAmount">পেমেন্ট (টাকা)</label>
              <input type="text" id="paidAmount" name="paidAmount" value={formData.paidAmount} onChange={handleChange} className="border rounded-md p-1" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="remainingAmount">অবশিষ্ট (টাকা)</label>
              <input disabled type="text" id="remainingAmount" name="remainingAmount" value={formData.remainingAmount} className="border rounded-md p-1 disabled:text-neutral-400" />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => dispatch(openPayRentModal(false))} className="bg-rose-900 hover:bg-rose-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer">
              ক্লোজ করুন
            </button>
            <button type="submit" className="bg-cyan-900 hover:bg-cyan-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer">
              পেমেন্ট করুন
            </button>
          </div>
        </form>
      </div>
  )
}

export default PayRentModal