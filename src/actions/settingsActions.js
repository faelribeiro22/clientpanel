import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION,
} from './types';

export const setDisableBalanceOnAdd = () => {
  return {
    type: DISABLE_BALANCE_ON_ADD,
  };
};

export const setDisableBalanceOnEdit = () => {
  return {
    type: DISABLE_BALANCE_ON_EDIT,
  };
};

export const setAllowRegistration = () => {
  return {
    type: ALLOW_REGISTRATION,
  };
};
