// normal start
// import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions/fetchHeroActions';

// const initialState = {
//   pending: false,
//   products: [],
//   error: null
// }

// // export const getProducts = state => state.products;
// // export const getProductsPending = state => state.pending;
// // export const getProductsError = state => state.error;

// export default function productsReducer(state = initialState, action) {
//   switch(action.type) { // 3. accroding actions.type, and use action creator's payload data (e.g. : FETCH_PRODUCTS_PENDING) to change reducer data,
//       case FETCH_PRODUCTS_PENDING: 
//           return {
//               ...state,
//               pending: true
//           }
//       case FETCH_PRODUCTS_SUCCESS:
//           return {
//               ...state,
//               pending: false,
//               products: action.data
//               // products: action.payload
//           }
//       case FETCH_PRODUCTS_ERROR:
//           return {
//               ...state,
//               pending: false,
//               error: action.error
//           }
//       default: 
//           return state;
//   }
// }
// normal end

// redux-thunk || redux-saga + redux-actions start
// https://sandstorm.de/de/blog/post/async-redux-middleware-comparison.html !!! 3 middleware compoare (thunk saga observable)
// https://juejin.im/post/5af25f7b518825673447043a
// https://juejin.im/post/5b41641ef265da0f8202126d
import { createActions, handleActions } from 'redux-actions';
import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions/fetchHeroActions'; // fetchHero
import { CLEAR_PRODUCTS_PENDING, CLEAR_PRODUCTS_SUCCESS, CLEAR_PRODUCTS_ERROR } from '../actions/clearHeroActions'; // clearHero
import { FETCH_PRODUCTS_DETAIL_PENDING, FETCH_PRODUCTS_DETAIL_SUCCESS, FETCH_PRODUCTS_DETAIL_ERROR } from '../actions/fetchHeroDetailActions'; // fetchHeroDetail

export const {
  fetchProductsPending, fetchProductsSuccess, fetchProductsError,
  clearProductsPending, clearProductsSuccess, clearProductsError,
  fetchProductsDetailPending, fetchProductsDetailSuccess, fetchProductsDetailError,
} = createActions({
  FETCH_PRODUCTS_PENDING: () => {},
  FETCH_PRODUCTS_SUCCESS: (data) => ({ data }), // var a = FETCH_PRODUCTS_SUCCESS(123) // a = { data:123 }
  FETCH_PRODUCTS_ERROR: (error) => ({ error }),

  CLEAR_PRODUCTS_PENDING: () => {},
  CLEAR_PRODUCTS_SUCCESS: () => {},
  CLEAR_PRODUCTS_ERROR: (error) => ({ error }),

  FETCH_PRODUCTS_DETAIL_PENDING: () => {},
  FETCH_PRODUCTS_DETAIL_SUCCESS: (data) => ({ data }),
  FETCH_PRODUCTS_DETAIL_ERROR: (error) => ({ error }),
});

const initialState = {
  pending: false,
  products: [],
  error: null,

  productsDetail: [],
  detailPending: false,
}

const productsReducer = handleActions(
  { // fetchHero
    // [FETCH_PRODUCTS_PENDING]: (state, action) => Object.assign({}, state, { // another wording
    //   pending: true
    // }),
    [FETCH_PRODUCTS_PENDING]: (state) => ({
      ...state,
      pending: true
    }),
    [FETCH_PRODUCTS_SUCCESS]: (state, { payload: { data } } ) => ({  // 此種方式帶來的資料預設在action.payload內 第二參數可直接傳入 (state, { payload: { data } } ) 將action.payload.data 變成 data直接取值
      ...state,
      pending: false,
      products: data //  action.payload.data
    }),
    [FETCH_PRODUCTS_ERROR]: (state, { payload: { error }} ) => ({
      ...state,
      pending: false,
      error: error // action.payload.error
    }),

    // clearHero
    [CLEAR_PRODUCTS_PENDING]: (state) => ({
      ...state,
      pending: true
    }),
    [CLEAR_PRODUCTS_SUCCESS]: (state) => ({
      ...state,
      pending: false,
      products: []
    }),
    [CLEAR_PRODUCTS_ERROR]: (state, { payload: { error }} ) => ({
      ...state,
      pending: false,
      error: error
    }),

    // fetchHeroDetail
    [FETCH_PRODUCTS_DETAIL_PENDING]: (state) => ({
      ...state,
      detailPending: true,
    }),
    [FETCH_PRODUCTS_DETAIL_SUCCESS]: (state, { payload: { data } } ) => ({
      ...state,
      detailPending: false,
      productsDetail: [data],
      // productsDetail: [...state.productsDetail, data],
    }),
    [FETCH_PRODUCTS_DETAIL_ERROR]: (state, { payload: { error }} ) => ({
      ...state,
      detailPending: false,
      error: error,
    }),
    
  },
  initialState,
);
export default productsReducer;
// redux-thunk + redux-actions end

// redux-saga start
// redux-saga end

// redux-observable start
// redux-observable end





// sample wording
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
