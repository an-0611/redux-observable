import { createActions, handleActions,
  // combineActions
} from 'redux-actions';

export const { getprofile, setprofile, addprofile } = createActions({
  GETPROFILE: (data = []) => ({ data }),
  SETPROFILE: (data = []) => ({ data }),
  ADDPROFILE: (data = []) => ({ data }),
});

const initialState = {
  data: [],
  aa: 123
};
const profileReducer = handleActions( // handleActions(reducerMap, defaultState);
  { // combineActions = 合併多個action & actionCreator
    // GETPROFILE: (state, action) => {
    //   return {
    //     data: state.data.concat(action.payload.data)
    //   };
    // },
    GETPROFILE: (state, action) => ({
      ...state, // 讓其他state 不被替換掉
      // data: state.data.concat(action.payload.data)
      data: [...action.payload.data]
    }),
    SETPROFILE: (state, action) => {
      // var index = state.data.findIndex((item) => {
      //   return item.id === action.payload.data.id;
      // });
      return {
        ...state,
        // data: state.data.splice(index, 1, action.payload.data)
      };
    },
    ADDPROFILE: (state, action) => ({
      ...state,
      data: state.data.concat(action.payload.data)
    })
  },
  initialState
);
// https://ithelp.ithome.com.tw/articles/10204837

export default profileReducer;
