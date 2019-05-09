import { combineReducers } from "redux";
import {
  TEMP,
} from '../actionTypes';

const tempDefaultState = {

}

const auth = (state = tempDefaultState, action) => {
  switch (action.type) {
    case TEMP: 
      return {
        ...state,
      }
    default:
      return state;
  }
}

const reducer = combineReducers({
  auth,
})

export default reducer;
