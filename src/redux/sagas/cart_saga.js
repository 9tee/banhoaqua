import {
    all, call, put, fork, takeLatest,
} from 'redux-saga/effects';

import {
    FETCH_CART,
} from '../actions/cart';
import actions from '../actions/cart';
import rf from '../../requests/RequestFactory';

function* fetchCart(action) {
    try {
        const { data, error } = yield call(
            () => rf.getRequest('CartRequest').fetchCart(), {}
        );
        if (error.code === 200) {
            yield put(actions.onFetchCartSucceed(data));
        }
        else {
            yield put(actions.onFetchCartFailed(error.message));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchCartFailed(err));
    }
}

function* watchCart() {
    yield takeLatest(FETCH_CART, fetchCart);
}

export default function* rootSaga() {
    yield all([fork(watchCart)]);
}