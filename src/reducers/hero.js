import { createActions, handleActions, combineActions } from 'redux-actions';

export const { increment, decrement } = createActions({ // createActions(actionMap) = 創建多個動作, 值可以是payloadCreator函數，一個數組[payloadCreator，metaCreator]
  INCREMENT: (amount = 1) => ({ amount }), // actionTypes.INCREMENT = 'INCREMENT' = type
  DECREMENT: (amount = 1) => ({ amount: -amount }),
});

const initialState = { counter: 10 };
const heroReducer = handleActions( // handleActions(reducerMap=處理多個動作, defaultState) 
  { // combineActions = 合併多個action & actionCreator
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  initialState
);

export default heroReducer;
