import * as actions from "./page.actions";

const INITIAL_STATE = {
    page: 1,
    previous: 1,
  }
  
  const pageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.CHANGE_PAGE:
            return {...state, page: action.payload , previous: state.page}
        default:
            return state
    }
  };
  
  export default pageReducer;
  
