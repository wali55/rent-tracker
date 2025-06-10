import MenuModal from "./MenuModal";
import { BsThreeDots } from "react-icons/bs";

const SingleRenter = ({renter}) => {
  const {apartment, name, mobile, baseRent, lastRentMonth, lastPaymentDate, dueAmount, status} = renter;
  return (
    <tr
      className="text-left text-neutral-300 text-sm hover:bg-cyan-950 cursor-pointer"
    >
      <td className="p-3">{apartment}</td>
      <td className="p-3">{name}</td>
      <td className="p-3">{mobile}</td>
      <td className="p-3">{baseRent}</td>
      <td className="p-3">{lastRentMonth ?? "-"}</td>
      <td className="p-3">{lastPaymentDate ?? "-"}</td>
      <td className="p-3">{dueAmount}</td>
      <td className="p-3">
        {status === "paid" ? (<div className="bg-lime-700 text-center rounded-full w-fit px-2 py-0.5 text-xs font-medium">
          পরিশোধিত
        </div>) : (<div className="bg-amber-700 text-center rounded-full w-fit px-2 py-0.5 text-xs font-medium">
          বকেয়া
        </div>)}
        
      </td>
      <td className="p-3 flex justify-center relative">
        <div className="border w-fit px-2 py-1 rounded-md hover:border-cyan-300 hover:text-cyan-300">
          <BsThreeDots />
        </div>
        {/* <MenuModal /> */}
      </td>
    </tr>
  );
};

export default SingleRenter;
