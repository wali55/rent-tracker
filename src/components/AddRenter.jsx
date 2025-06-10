const AddRenter = () => {
  return (
    <form action="" className="p-4 bg-neutral-800 rounded-md">
      <h2 className="py-2 font-semibold">ভাড়াটিয়া</h2>
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">নাম</label>
          <input type="text" id="name" className="border rounded-md" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">এপার্টমেন্ট</label>
          <input type="text" id="name" className="border rounded-md" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">মোবাইল</label>
          <input type="text" id="name" className="border rounded-md" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">বেসিক ভাড়া (টাকা)</label>
          <input type="text" id="name" className="border rounded-md" />
        </div>
      </div>
      <button className="bg-cyan-900 hover:bg-cyan-950 py-2 rounded-md mt-4 w-full font-semibold cursor-pointer">
        এড করুন
      </button>
    </form>
  );
};

export default AddRenter;
