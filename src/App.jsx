import { useEffect } from "react";
import AddRenter from "./components/AddRenter";
import AddRentModal from "./components/AddRentModal";
import Header from "./components/Header";
import PayRentModal from "./components/PayRentModal";
import RentTracker from "./components/RentTracker";
import fetchRenters from "./redux/rents/thunk/fetchRenters";
import { useDispatch, useSelector } from "react-redux";
import EditRenterModal from "./components/EditRenterModal";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRenters());
  }, [])

  const rents = useSelector((state) => state.rents);
  const {editRenterModal} = rents;
  return (
    <div className="relative hind-siliguri-regular p-4 bg-neutral-900 text-neutral-200 min-h-screen w-full">
      <Header />
      {/* <AddRentModal /> */}
      {/* <PayRentModal /> */}
      {editRenterModal && <EditRenterModal />}
      <main className="block lg:flex gap-4 my-4">
        <div className="w-full lg:w-1/5">
          <AddRenter />
        </div>
        <RentTracker />
      </main>
    </div>
  );
}

export default App;
