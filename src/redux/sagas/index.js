import { all } from 'redux-saga/effects';
import watchCategory from './category_saga';
import watchProduct from './product_saga';
import watchUser from './user_saga';

function* rootSaga() {
  yield all([
    watchCategory(),
    watchProduct(),
    watchUser(),
  ]);
}

export default rootSaga;