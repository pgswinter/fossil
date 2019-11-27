import {
    all,
    fork
} from 'redux-saga/effects';

import fossil from './sagas/fossil';

export default function* () {
    yield all([
        fork(fossil)
    ])
}