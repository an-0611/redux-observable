import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions/fetchHeroActions';

const initialState = {
  pending: false,
  products: [],
  error: null
}

// export const getProducts = state => state.products;
// export const getProductsPending = state => state.pending;
// export const getProductsError = state => state.error;

export default function productsReducer(state = initialState, action) {
  switch(action.type) { // 3. accroding actions.type, and use action creator's payload data (e.g. : FETCH_PRODUCTS_PENDING) to change reducer data,
      case FETCH_PRODUCTS_PENDING: 
          return {
              ...state,
              pending: true
          }
      case FETCH_PRODUCTS_SUCCESS:
          return {
              ...state,
              pending: false,
              products: action.data
              // products: action.payload
          }
      case FETCH_PRODUCTS_ERROR:
          return {
              ...state,
              pending: false,
              error: action.error
          }
      default: 
          return state;
  }
}

// import { createActions, handleActions, combineActions } from 'redux-actions';

// export const { increment, decrement } = createActions({ // createActions(actionMap) = 創建多個動作, 值可以是payloadCreator函數，一個數組[payloadCreator，metaCreator]
//   INCREMENT: (amount = 1) => ({ amount }), // actionTypes.INCREMENT = 'INCREMENT' = type
//   DECREMENT: (amount = 1) => ({ amount: -amount }),
// });

// const initialState = {
//   counter: 10,
//   heroData: [],
//   error: ''
// };

// const heroReducer = handleActions( // handleActions(reducerMap=處理多個動作, defaultState) 
//   { // combineActions = 合併多個action & actionCreator
//     [combineActions(increment, decrement)]: (
//       state,
//       { payload: { amount } }
//     ) => {
//       return { ...state, counter: state.counter + amount };
//     }
//   },
//   initialState
// );

// export default heroReducer;
