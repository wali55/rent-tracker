import RenterSummary from "./RenterSummary"

import FilterRenter from "./FilterRenter";
import RenterTable from "./RenterTable";

const RentTracker = () => {
  return (
    <div className="h-screen w-full lg:w-4/5 mt-4 lg:mt-0">
          {/* top */}
          <RenterSummary />
          {/* bottom */}
          <div className="mt-6">
            <div className="flex justify-between">
              <h2 className="font-semibold">ভাড়াটিয়াদের লিস্ট</h2>
              <FilterRenter />
            </div>
            <RenterTable />
          </div>
        </div>
  )
}

export default RentTracker