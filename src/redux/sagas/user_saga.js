import {
    all, call, put, fork, takeLatest,
} from 'redux-saga/effects';

import axios from 'axios';
import {BASEURL} from '../../bootstrap';

import {
    LOGIN,
    LOGIN_SUCCEED,
    LOGOUT
} from '../actions/user';
import actions from '../actions/user';
import rf from '../../requests/RequestFactory';

function* login(action) {
    try {
        const { data, error } = yield call(
            (data) => rf.getRequest('LoginRequest').login(data), action.data
        );

        if (error.code === 200 && data.typeid === "user") {
            yield put(actions.onLoginSucceed(data));
            yield call(action.callback)
        } else {
            yield put(actions.onLoginFailed(error.message));
        }

    } catch (err) {
        console.log("=======", err)
        yield put(actions.onLoginFailed(err));
    }
}

function* loginSucceed(action) {
    window.localStorage.setItem('token', action.data.token)
    yield window.axios = axios.create({
        baseURL: BASEURL,
        headers: { token: action.data.token }
    });
}

function* logout(action) {
    window.localStorage.removeItem('token')
    yield window.axios = axios.create({
        baseURL: BASEURL,
    });
}

function* watchUser() {
    yield takeLatest(LOGIN, login);
    yield takeLatest(LOGIN_SUCCEED, loginSucceed)
    yield takeLatest(LOGOUT, logout);
}

export default function* rootSaga() {
    yield all([fork(watchUser)]);
}