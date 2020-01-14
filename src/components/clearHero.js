import { takeLatest, put, call } from 'redux-saga/effects';
// import { CLEAR_PRODUCTS_PENDING } from '../actions/clearHeroActions';
import { clearProductsPending, clearProductsSuccess, clearProductsError } from '../reducers/hero';

function * clearUsers() {
  try {
    // const products = yield call(() => ({ products: [] })); // here we describe our api-request as effect
    yield call(clearProductsSuccess())
  } catch (e) {
    yield put(clearProductsError(e));
  }
}

export function * clearHero() {
  yield takeLatest(clearProductsPending, clearUsers); // method 1
}