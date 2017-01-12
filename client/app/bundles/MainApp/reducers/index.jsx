import mainReducer from './mainReducer';
import { initialState as mainState } from './mainReducer';

export default {
  mainStore: mainReducer,
};

export const initialStates = {
  mainState,
};
