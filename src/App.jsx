import AddRenter from "./components/AddRenter";
import AddRentModal from "./components/AddRentModal";
import Header from "./components/Header";
import PayRentModal from "./components/PayRentModal";
import RentTracker from "./components/RentTracker";

function App() {
  return (
    <div className="relative hind-siliguri-regular p-4 bg-neutral-900 text-neutral-200 min-h-screen w-full">
      <Header />
      {/* <AddRentModal /> */}
      {/* <PayRentModal /> */}
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
