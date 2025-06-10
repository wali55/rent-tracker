const RenterSummary = () => {
  return (
    <div className="block lg:flex gap-2">
      <div className="bg-neutral-800 flex-1 p-4 flex flex-col gap-2 text-center rounded-md lg:mt-0 mt-2">
        <p className="font-semibold">টোটাল ভাড়াটিয়া</p>
        <h3 className="text-3xl font-semibold">8</h3>
      </div>
      <div className="bg-neutral-800 flex-1 p-4 flex flex-col gap-2 text-center rounded-md lg:mt-0 mt-2">
        <p className="font-semibold">পরিশোধিত ভাড়াটিয়া</p>
        <h3 className="text-3xl font-semibold">7</h3>
      </div>
      <div className="bg-neutral-800 flex-1 p-4 flex flex-col gap-2 text-center rounded-md lg:mt-0 mt-2">
        <p className="font-semibold">বকেয়া ভাড়াটিয়া</p>
        <h3 className="text-3xl font-semibold">1</h3>
      </div>
    </div>
  );
};

export default RenterSummary;
