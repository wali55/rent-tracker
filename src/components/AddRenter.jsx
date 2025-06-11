import { useState } from "react";
import addRenterThunk from "../redux/rents/thunk/addRenterThunk";
import { useDispatch } from "react-redux";

const AddRenter = () => {
  const dispatch = useDispatch();
  const initialData = {
    name: "",
    apartment: "",
    mobile: "",
    baseRent: ""
  }

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRenterThunk(formData));
    setFormData(initialData);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-neutral-800 rounded-md">
      <h2 className="py-2 font-semibold">ভাড়াটিয়া</h2>
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">নাম</label>
          <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" className="border rounded-md p-1" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="apartment">এপার্টমেন্ট</label>
          <input value={formData.apartment} onChange={handleChange} type="text" id="apartment" name="apartment" className="border rounded-md p-1" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="mobile">মোবাইল</label>
          <input value={formData.mobile} onChange={handleChange} type="text" id="mobile" name="mobile" className="border rounded-md p-1" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="baseRent">বেসিক ভাড়া (টাকা)</label>
          <input value={formData.baseRent} onChange={handleChange} type="text" id="baseRent" name="baseRent" className="border rounded-md p-1" />
        </div>
      </div>
      <button type="submit" className="bg-cyan-900 hover:bg-cyan-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer">
        এড করুন
      </button>
    </form>
  );
};

export default AddRenter;
