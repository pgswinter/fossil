import {
    put,
    call,
    takeLatest,
    all,
    fork,
} from "redux-saga/effects";

import {
    REQUEST_FETCH_FOSSIL,
    REQUEST_SEARCH
} from '../actions/fossil/actionTypes';
import {
    reqFetchSuccess,
    reqFetchFail,

    reqSeachSuccess,
    reqSeachFail,
} from '../actions/fossil/actions';

import api from '../services/api';
import noneAccent from '../util/nonAccentVietnamese';
// *********************************************************
// REQUEST SEARCH FOSSIL
// *********************************************************
function* reqFetchFossil(params) {
    const { params: { currentPage, pageLimit } } = params;

    try {
        const { data } = yield call(() => api.Fossil.getJson());
        const { order_index, total_records } = data;
        const splitData = data.data;

        const indexOfLastData = currentPage * pageLimit;
        const indexOfFirstData = indexOfLastData - pageLimit;
        const currentData = splitData.slice(indexOfFirstData, indexOfLastData);

        const newData = {
            order_index,
            total_records,
            data: currentData
        }

        yield put(reqFetchSuccess(newData));
    } catch (error) {
        console.log(error);
        yield put(reqFetchFail(error))
    }
}
function* watchReqSearchFossil() {
    yield takeLatest(REQUEST_FETCH_FOSSIL, reqFetchFossil);
}

function* reqSeach(params) {
    const inputText = params.params.inputText.toLowerCase();
    const pagination = params.params.pagination;
    const { currentPage, pageLimit } = pagination;

    try {
        const { data } = yield call(() => api.Fossil.getJson());
        const { order_index, total_records } = data;

        const splitData = data.data.filter(item => {
            if (noneAccent(item.name).indexOf(inputText) > -1) {
                return item
            }
        });
        if (splitData.length > 0) {
            const indexOfLastData = currentPage * pageLimit;
            const indexOfFirstData = indexOfLastData - pageLimit;
            const currentData = splitData.slice(indexOfFirstData, indexOfLastData);
            const newData = {
                order_index,
                total_records,
                data: currentData
            }
            yield put(reqSeachSuccess(newData));
        } else {
            data.searchResult = "Do not any record containt like as keyword";
            yield put(reqSeachSuccess(data));
        }
    } catch (error) {
        console.log(error);
        yield put(reqSeachFail(error))
    }
}
function* watchReqSeach() {
    yield takeLatest(REQUEST_SEARCH, reqSeach);
}

export default function* () {
    yield all([
        fork(watchReqSearchFossil),
        fork(watchReqSeach)
    ])
}
