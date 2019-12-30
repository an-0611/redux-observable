import { createActions, handleActions, combineActions } from 'redux-actions';

export const { get_profile, update_profile, add_profile } = createActions({
  GETPROFILE: (data = []) => ({ data }),
  SETPROFILE: (data = []) => ({ data }),
  ADDPROFILE: (data = []) => ({ data }),
  // DECREMENT: (data = []) => ({ amount: -amount }),
});

const initialState = {
  data: []
};
const profileReducer = handleActions( // handleActions(reducerMap=處理多個動作, defaultState) 
  { // combineActions = 合併多個action & actionCreator
    GETPROFILE: (state) => {
      var arr = [];
      fetch('http://hahow-recruit.herokuapp.com/heroes')
      .then(res => res.json())
      .then((result) => {
        arr = result;
      });
      return { ...state, data: arr };
    },
    update_profile: (state, action) => ({
      data: state.data.splice(state.data.indexOf(action.payload), 1, action.payload)
    }),
    add_profile: (state, action) => ({
      data: state.data.concat(action.payload)
    }),
  },
  initialState
);
// https://ithelp.ithome.com.tw/articles/10204837

export default profileReducer;
