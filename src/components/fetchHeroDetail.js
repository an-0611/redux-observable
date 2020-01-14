import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchProductsDetailPending, fetchProductsDetailSuccess, fetchProductsDetailError } from '../reducers/hero';

function * fetchUsersDetail({ payload }) {
    try {
        const id = payload.id;
        const heroDetail = yield call(() => fetch(`http://hahow-recruit.herokuapp.com/heroes/${id}/profile`).then(resp => resp.json()));
        var a = {};
        a[id] = heroDetail;
        yield put(fetchProductsDetailSuccess(a));
    }   catch (e) {
        yield put(fetchProductsDetailError(e));
    }
}

export function * fetchHeroDetail() {
    yield takeLatest(fetchProductsDetailPending, fetchUsersDetail);
}

// call 執行 Function ， put 觸發 dispatch