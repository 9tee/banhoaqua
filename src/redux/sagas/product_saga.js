import {
    all, call, put, fork, takeLatest,
} from 'redux-saga/effects';

import {
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
} from '../actions/product';
import actions from '../actions/product';
import rf from '../../requests/RequestFactory';

function* fetchProducts(action) {
    try {
        const { data, total_count, error } = yield call(
            (data) => rf.getRequest('ProductRequest').fetchProducts(data), action.data
        );
        if (error.code === 200) {
            yield put(actions.onFetchProductsSucceed({ data, total_count }));
        }
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchProductsFailed(err));
    }
}

function* fetchProduct(action) {
    try {
        const { data, total_count } = yield call(
            (data) => rf.getRequest('ProductRequest').fetchProduct(data), action.data
        );
        console.log(data, total_count)
        yield put(actions.onFetchProductSucceed(data));
    } catch (err) {
        console.log("=======", err)
        yield put(actions.onFetchProductFailed(err));
    }
}

function* watchProduct() {
    yield takeLatest(FETCH_PRODUCTS, fetchProducts);
    yield takeLatest(FETCH_PRODUCT, fetchProduct);
}

export default function* rootSaga() {
    yield all([fork(watchProduct)]);
}