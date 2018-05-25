/* This will create a rootSAGA from the available sagas and export
 * it to be used by the saga middleware to make the sagas usable.
 */

import { fork } from "redux-saga/effects";

import { categoriesSaga, productsSaga } from "./watchers";
/**
 * root saga aggregates all sagas to be registered by saga middleware
 */
export default function* rootSaga() {
  yield [fork(categoriesSaga), fork(productsSaga)];
}
