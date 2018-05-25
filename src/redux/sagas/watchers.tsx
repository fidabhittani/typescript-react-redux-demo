/*
 * This file contains generator functions which are used to watch for the action being dispatched on store,
 * watchers will watch for the specific actions being dispatched and run a saga i-e a generator function against it.
 * */
import { GET_PRODUCTS, GET_PRODUCTS_IDS } from "../../utils/constants";

import { getProductIdsWorker, getProductsWorker } from "./workers";

import { takeLatest } from "redux-saga/effects";

export function* categoriesSaga() {
  yield takeLatest(GET_PRODUCTS_IDS, getProductIdsWorker);
}

export function* productsSaga() {
  yield takeLatest(GET_PRODUCTS, getProductsWorker);
}
