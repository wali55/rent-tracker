import MenuModal from "./MenuModal";
import { BsThreeDots } from "react-icons/bs";

const SingleRenter = ({body}) => {
  return (
    <tr
      className="text-left text-neutral-300 text-sm hover:bg-cyan-950 cursor-pointer"
    >
      <td className="p-3">{body.apartment}</td>
      <td className="p-3">{body.name}</td>
      <td className="p-3">{body.mobile}</td>
      <td className="p-3">{body.baseRent}</td>
      <td className="p-3">{body.lastRentMonth}</td>
      <td className="p-3">{body.lastPaymentDate}</td>
      <td className="p-3">{body.dueAmount}</td>
      <td className="p-3">
        <div className="bg-amber-700 text-center rounded-full w-fit px-2 py-0.5 text-xs font-medium">
          {body.status}
        </div>
      </td>
      <td className="p-3 flex justify-center relative">
        <div className="border w-fit px-2 py-1 rounded-md hover:border-cyan-300 hover:text-cyan-300">
          <BsThreeDots />
        </div>
        <MenuModal />
      </td>
    </tr>
  );
};

export default SingleRenter;
