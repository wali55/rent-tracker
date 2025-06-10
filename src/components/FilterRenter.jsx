const FilterRenter = () => {
  return (
    <div className="flex gap-2">
      <button className="text-xs border border-neutral-700 px-3 py-1.5 rounded-full font-medium hover:bg-cyan-950 cursor-pointer">
        সকল
      </button>
      <button className="text-xs bg-neutral-800 px-3 py-1.5 rounded-full font-medium hover:bg-cyan-950 cursor-pointer">
        পরিশোধিত
      </button>
      <button className="text-xs bg-neutral-800 px-3 py-1.5 rounded-full font-medium hover:bg-cyan-950 cursor-pointer">
        বকেয়া
      </button>
    </div>
  );
};

export default FilterRenter;
