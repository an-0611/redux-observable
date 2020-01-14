// import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from '../actions/fetchHeroActions'; // normal type
// redux-thunk start
// import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from '../reducers/hero';
// export function fetchHero() {
//     return dispatch => {
//         dispatch(fetchProductsPending());
//         return fetch('http://hahow-recruit.herokuapp.com/heroes') // fetch('http://hahow-recruit.herokuapp.com/heroes/1/profile')
//         .then(res => res.json())
//         .then(res => {
//             // if (res.error) { // if api have error prototype
//             //     throw(res.error);
//             // }
//             dispatch(fetchProductsSuccess(res));
//             // return res.products;
//         })
//         .catch(error => {
//             dispatch(fetchProductsError(error));
//         })
//     }
// }
// redux-thunk end

// redux-saga start
import { takeLatest, put, call } from 'redux-saga/effects';
// import { FETCH_PRODUCTS_PENDING } from '../actions/fetchHeroActions';
import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from '../reducers/hero';


function * fetchUsers() { // saga explain // https://pjchender.github.io/2018/12/22/redux-saga/
  try {
    const heroes = yield call(() => fetch('http://hahow-recruit.herokuapp.com/heroes').then(resp => resp.json())); // here we describe our api-request as effect
    // call => 呼叫被給予的函式
    yield put(fetchProductsSuccess(heroes)); // calling our action creator we create our fetchUsersSuccess-action object.
    // The 'put()' helper instructs Redux-Saga to dispatch the action on our redux store
  } catch (e) {
    yield put(fetchProductsError(e)); // put => dispatch 一個 action 到 store 中
  }
}

export function * fetchHero() { 
  // Spawns the specified generator whenever an action of the type FETCH_USERS_START // flows through our middleware. Running sagas from previous FETCH_USERS_START-actions // are cancelled automatically
  // yield takeLatest(actionTypes.FETCH_USERS_START, fetchUsers)
  yield takeLatest(fetchProductsPending, fetchUsers); // method 1
  // yield takeLatest(FETCH_PRODUCTS_PENDING, fetchUsers); // method 2
}
// redux-saga end