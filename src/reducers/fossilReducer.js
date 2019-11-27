/* eslint-disable no-case-declarations */
import moment from 'moment';

import {
    // REQUEST_TODO_FRONT,
    REQUEST_ADD_FRONT,
    REQUEST_EDIT_FORM,
    REQUEST_CANCEL_EDIT,
    REQUEST_EDIT_FRONT,
    REQUEST_DELETE_FRONT,

    // REQUEST_FILTER_FAVOURITE_FRONT,
    // REQUEST_CANCEL_FILTER_FAVOURITE,

    REQUEST_SORT_DATE_FRONT,
    REQUEST_SORT_DESC_DATE_FRONT,

    // REQUEST_SORT_TITLE_FRONT,

    REQUEST_FILTER_DATE_FRONT,

    REQUEST_SEARCH,
    REQUEST_SEARCH_SUCCESS,
    REQUEST_SEARCH_FAIL,

    REQUEST_FETCH_FOSSIL,
    REQUEST_FETCH_FOSSIL_SUCCESS,
    REQUEST_FETCH_FOSSIL_FAIL
} from '../actions/fossil/actionTypes';

export let defaultData = {}
const initialState = {
    loading: false,
    error: '',
    data: [],
    isLoaded: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        // *** FETCH
        case REQUEST_FETCH_FOSSIL:
            return {
                ...state,
                loading: true,
                isLoaded: false
            }
        case REQUEST_FETCH_FOSSIL_SUCCESS:
            defaultData = action && action.payload;
            return {
                ...state,
                loading: false,
                data: defaultData,
                isLoaded: true,
                isSortedByDate: false,
                isFilteredByDate: false,
                isSortedByDescDate: false,
            }
        case REQUEST_FETCH_FOSSIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action,
                isLoaded: true
            }
        // *** SEARCH
        case REQUEST_SEARCH:
            return {
                ...state,
                loading: true,
                isLoaded: false
            }
        case REQUEST_SEARCH_SUCCESS:
            defaultData = action && action.params;
            return {
                ...state,
                loading: false,
                data: defaultData,
                isLoaded: true,
                isSortedByDate: false,
                isFilteredByDate: false,
                isSortedByDescDate: false,
            }
        case REQUEST_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action,
                isLoaded: true
            }
        // *** FILTER    
        case REQUEST_FILTER_DATE_FRONT:
            const filterDateData = state.data.data;
            const dateParams = action.params;
            const newFilterDateFormData = filterDateData.filter(item => {
                const itemDateData = moment(item.date_order).format('L');
                if (itemDateData === dateParams) {
                    return item
                }
            });
            const newFilterDateData = {
                ...state.data,
                data: newFilterDateFormData,
            }
            return {
                ...state,
                loading: false,
                data: newFilterDateData,
                isLoaded: true,
                isFilteredByDate: true,
            }
        case REQUEST_SORT_DESC_DATE_FRONT:
            const sortDateDescData = state.data.data;
            const newSortDateDescFormData = sortDateDescData.sort((a, b) => {
                return new Date(b.date_order) - new Date(a.date_order)
            })
            const newSortDateDescData = {
                ...state.data,
                data: newSortDateDescFormData,
            }
            return {
                ...state,
                loading: false,
                data: newSortDateDescData,
                isLoaded: true,
                isSortedByDescDate: true,
            }
        case REQUEST_SORT_DATE_FRONT:
            const sortData = state.data.data;
            const newSortFormData = sortData.sort((a, b) => {
                return new Date(a.date_order) - new Date(b.date_order)
            })
            const newSortData = {
                ...state.data,
                data: newSortFormData,
            }
            return {
                ...state,
                loading: false,
                data: newSortData,
                isLoaded: true,
                isSortedByDate: true,
            }
        // *** CRUD
        case REQUEST_DELETE_FRONT:
            const paramsDeleteId = action.params;
            const deleteData = state.data.data;
            const newDeleteFormData = deleteData.filter(item => item.order_id !== paramsDeleteId);
            const newDeleteData = {
                ...state.data,
                data: newDeleteFormData,
            }
            return {
                ...state,
                loading: false,
                data: newDeleteData,
                isLoaded: true
            }
        case REQUEST_EDIT_FORM:
            const paramsEditFormId = action.params;
            const editFormData = state.data.data;
            const newEditFormData = editFormData.map(item => {
                if (item.order_id === paramsEditFormId) {
                    item.isEditting = true;
                }
                return item;
            });
            const newEditData = {
                ...state.data,
                data: newEditFormData,
            }
            return {
                ...state,
                loading: false,
                data: newEditData,
                isLoaded: true
            }
        case REQUEST_CANCEL_EDIT:
            const paramsCancelEditId = action.params;
            const cancelEditData = state.data.data;
            const newCancelEditFormData = cancelEditData.map(item => {
                if (item.order_id === paramsCancelEditId) {
                    item.isEditting = false
                }
                return item;
            });
            const newCancelEditData = {
                ...state.data,
                data: newCancelEditFormData,
            }
            return {
                ...state,
                loading: false,
                data: newCancelEditData,
                isLoaded: true
            }
        case REQUEST_EDIT_FRONT:
            const paramsUpdateData = action.params;

            const itemUpdateData = {
                date_order: moment(new Date()).format('L'),
                level: paramsUpdateData.level,
                name: paramsUpdateData.name,
                order_id: paramsUpdateData.order_id,
                quantity: paramsUpdateData.quantity,
                total: paramsUpdateData.total
            }
            const updateData = state.data.data;
            const newUpdateFormData = updateData.map(item => {
                if (item.order_id === paramsUpdateData.order_id) {
                    item = itemUpdateData
                }
                return item;
            });
            const newUpdateData = {
                ...state.data,
                data: newUpdateFormData,
            }
            return {
                ...state,
                loading: false,
                data: newUpdateData,
                isLoaded: true
            }
        case REQUEST_ADD_FRONT:
            const {
                level,
                name,
                orderId,
                quantity,
                total
            } = action.params;
            const itemAddData = {
                date_order: moment(new Date()).format('L'),
                level,
                name,
                order_id: orderId,
                quantity,
                total
            }
            const newItemData = [itemAddData, ...state.data.data];
            const newData = {
                ...state.data,
                data: newItemData,
            }
            return {
                ...state,
                loading: false,
                data: newData,
                isLoaded: true
            }
        default:
            return state;
    }
}