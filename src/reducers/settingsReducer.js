import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION,
} from '../actions/types';

const initialState = {
  disableBalandeOnAdd: true,
  disableBalandeOnEdit: false,
  allowRegistration: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalandeOnAdd: !state.disableBalandeOnAdd,
      };
    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalandeOnEdit: !state.disableBalandeOnEdit,
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: !state.allowRegistration,
      };
    default:
      return state;
  }
}
