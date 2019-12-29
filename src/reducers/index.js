// reducers

// import { combineReducers } from 'redux'

// import orders from './orders'

// export default combineReducers({
//   orders,
// })

import { createActions, handleActions, combineActions } from 'redux-actions';

const initialState = { counter: 10 };

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  initialState
);

export default reducer;