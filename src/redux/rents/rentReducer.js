import {
  ADD_RENT,
  ADD_RENTER,
  DELETE_RENTER,
  EDIT_RENTER,
  LOAD_RENTERS,
  OPEN_ADD_RENT_MODAL,
  OPEN_EDIT_RENTER_MODAL,
  OPEN_PAY_RENT_MODAL,
  PAY_RENT,
  SET_RENTER_ID,
} from "./actionTypes";
import { initialState } from "./initialState";

const rentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RENTERS:
      if (action.payload.length === 0) {
        return;
      }
      const allRenters = action.payload.length;
      const paidRenters = action.payload.filter(
        (renter) => renter.status === "paid"
      ).length;
      const dueRenters = action.payload.filter(
        (renter) => renter.status === "due"
      ).length;
      return {
        ...state,
        renters: [...action.payload],
        totalRenters: allRenters,
        totalPaidRenters: paidRenters,
        totalDueRenters: dueRenters,
      };
    case ADD_RENTER:
      return {
        ...state,
        renters: [...state.renters, action.payload],
        totalRenters: state.totalRenters + 1,
        totalPaidRenters: state.totalPaidRenters + 1,
      };
    case EDIT_RENTER:
      return {
        ...state,
        renters: state.renters.map((renter) => {
          if (renter.id === parseInt(action.payload.renterId)) {
            return { ...renter, ...action.payload.newRenter };
          } else {
            return renter;
          }
        }),
      };
    case DELETE_RENTER:
      return {
        ...state,
        renters: state.renters.filter(
          (renter) => renter.id !== parseInt(action.payload)
        ),
      };
    case ADD_RENT:
      return {
        ...state,
        renters: state.renters.map((renter) => {
          if (renter.id === parseInt(action.payload.renterId)) {
            return {
              ...renter,
              lastRentMonth: action.payload.rent.lastRentMonth,
              dueAmount:
                action.payload.rent.dueAmount + action.payload.rent.totalBill,
              status: "due",
            };
          } else {
            return renter;
          }
        }),
        totalPaidRenters: state.totalPaidRenters - 1,
        totalDueRenters: state.totalDueRenters + 1,
      };
    case PAY_RENT:
      return {
        ...state,
        renters: state.renters.map((renter) => {
          if (renter.id === parseInt(action.payload.renterId)) {
            const updatedDueAmount = parseInt(
              action.payload.payment.remainingAmount
            );
            const updatedStatus = updatedDueAmount > 0 ? "due" : "paid";
            return {
              ...renter,
              lastPaymentDate: action.payload.payment.paymentDate,
              dueAmount: updatedDueAmount,
              status: updatedStatus,
            };
          } else {
            return renter;
          }
        }),
      };
    case SET_RENTER_ID:
      return {
        ...state,
        selectedRenterId: parseInt(action.payload)
      }
    case OPEN_EDIT_RENTER_MODAL:
      return {
        ...state,
        editRenterModal: action.payload
      }
    case OPEN_ADD_RENT_MODAL:
      return {
        ...state,
        addRentModal: action.payload
      }
    case OPEN_PAY_RENT_MODAL:
      return {
        ...state,
        payRentModal: action.payload
      }
    default:
      return state;
  }
};

export default rentReducer;
