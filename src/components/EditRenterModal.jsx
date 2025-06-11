const EditRenterModal = () => {
  return (
    <div>
        <div className="absolute bg-neutral-950 opacity-90 left-0 top-0 w-full h-full z-50"></div>
        <form
          action=""
          className="absolute p-4 bg-neutral-800 rounded-md z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[400px]"
        >
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
        এডিট করুন
      </button>
        </form>
      </div>
  )
}

export default EditRenterModal