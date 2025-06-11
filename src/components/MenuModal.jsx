import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openEditRenterModal } from "../redux/rents/actions";

const MenuModal = ({setOpenMenuModal}) => {
  const dispatch = useDispatch();
  
  const handleOpenEditModal = () => {
    dispatch(openEditRenterModal(true));
    setOpenMenuModal(false);
  }

  return (
    <div className="w-24 absolute bg-neutral-700 right-[40px] top-[40px] rounded-md font-medium flex flex-col gap-2 z-10">
      <button onClick={handleOpenEditModal} className="cursor-pointer flex gap-1.5 items-center hover:text-cyan-500 px-2 pt-2 pb-1">
        <FaEdit />
        <p>Edit</p>
      </button>
      <button className="cursor-pointer flex gap-1.5 items-center hover:text-cyan-500 px-2 pb-1">
        <MdDeleteForever className="size-4" />
        <p>Delete</p>
      </button>
      <button className="cursor-pointer flex gap-1.5 items-center hover:text-cyan-500 px-2 pb-1">
        <MdAddBox />
        <p>Add Rent</p>
      </button>
      <button className="cursor-pointer flex gap-1.5 items-center hover:text-cyan-500 px-2 pb-2">
        <MdPayments />
        <p>Pay Rent</p>
      </button>
    </div>
  );
};

export default MenuModal;
