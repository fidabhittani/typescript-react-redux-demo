/*
 * This file contains generator functions which are used as sagas for the watchers, this handles our side effects which leave
 * our actions to stay be able to process impurity in actions.
 * */

import { call, put } from "redux-saga/effects";
import { setProductIds, setProducts } from "../actions";

import { apiHost, version2, version3 } from "../../config";
import { formatProducts } from "../../utils/functions";
import { request } from "../service";

// GetProducts Worker saga
function* getProductsWorker(action: any) {
  const productIds = action.payload.join(",");
  const options = {
    *onSuccess(resp: any) {
      yield put(setProducts(formatProducts(resp) || []));
    },
    apiOptions: {
      url: `${apiHost}/v${version2}/getProducts?productId=${productIds}`
    },
    loadingText: "Getting your products..."
  };

  yield call(request, options);
}

// GetProductIds Worker saga
function* getProductIdsWorker() {
  const options = {
    *onSuccess(resp: any) {
      yield put(setProductIds(resp.data.productIds));
    },
    apiOptions: {
      url: `${apiHost}/v${version3}/20250?appId=428&limit=48&page=1&sort=price`
    }
  };

  yield call(request, options);
}

export { getProductsWorker, getProductIdsWorker };
