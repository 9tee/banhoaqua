import { all } from 'redux-saga/effects';
import watchCategory from './category_saga';
import watchLogin from './login_saga'

function* rootSaga() {
  yield all([
    watchCategory(),
    watchLogin(),
  ]);
}

export default rootSaga;