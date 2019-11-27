import {
    REQUEST_ADD_FRONT,
    REQUEST_EDIT_FORM,
    REQUEST_CANCEL_EDIT,
    REQUEST_EDIT_FRONT,
    REQUEST_DELETE_FRONT,

    REQUEST_FILTER_DATE_FRONT,
    REQUEST_CANCEL_FILTER_DATE,

    REQUEST_SORT_DATE_FRONT,
    REQUEST_SORT_DESC_DATE_FRONT,
    REQUEST_CANCEL_SORT_DATE,
    
    REQUEST_FETCH_FOSSIL,
    REQUEST_FETCH_FOSSIL_SUCCESS,
    REQUEST_FETCH_FOSSIL_FAIL,

    REQUEST_SEARCH,
    REQUEST_SEARCH_SUCCESS,
    REQUEST_SEARCH_FAIL
} from './actionTypes';

// *********************************************************
// REQUEST SEARCH
// *********************************************************
export const reqSearch = (params) => {
    return {
        type: REQUEST_SEARCH,
        params
    }
}
// *********************************************************
// REQUEST SEARCH SUCCESS
// *********************************************************
export const reqSeachSuccess = (params) => {
    return {
        type: REQUEST_SEARCH_SUCCESS,
        params
    }
}
// *********************************************************
// REQUEST SEARCH FAIL
// *********************************************************
export const reqSeachFail = (params) => {
    return {
        type: REQUEST_SEARCH_FAIL,
        params
    }
}
// *********************************************************
// REQUEST ADD FRONT
// *********************************************************
export const reqAddFront = (params) => {
    return {
        type: REQUEST_ADD_FRONT,
        params
    }
}
// *********************************************************
// REQUEST EDIT FORM
// *********************************************************
export const reqEditForm = (params) => {
    return {
        type: REQUEST_EDIT_FORM,
        params
    }
}
// *********************************************************
// REQUEST CANCEL EDIT
// *********************************************************
export const reqCancelEdit = (params) => {
    return {
        type: REQUEST_CANCEL_EDIT,
        params
    }
}
// *********************************************************
// REQUEST EDIT FRONT
// *********************************************************
export const reqEditFront = (params) => {
    return {
        type: REQUEST_EDIT_FRONT,
        params
    }
}
// *********************************************************
// REQUEST DELETE FRONT
// *********************************************************
export const reqDeleteFront = (params) => {
    return {
        type: REQUEST_DELETE_FRONT,
        params
    }
}
// *********************************************************
// REQUEST FILTER DATE FRONT
// *********************************************************
export const reqFilterDateFront = (params) => {
    return {
        type: REQUEST_FILTER_DATE_FRONT,
        params
    }
}
// *********************************************************
// REQUEST CANCEL FILTER DATE
// *********************************************************
export const reqCancelFilterDate = (params) => {
    return {
        type: REQUEST_CANCEL_FILTER_DATE,
        params
    }
}
// *********************************************************
// REQUEST SORT DATE FRONT
// *********************************************************
export const reqSortDateFront = (params) => {
    return {
        type: REQUEST_SORT_DATE_FRONT,
        params
    }
}
// *********************************************************
// REQUEST SORT DATE DESC FRONT
// *********************************************************
export const reqSortDescDateFront = (params) => {
    return {
        type: REQUEST_SORT_DESC_DATE_FRONT,
        params
    }
}
// *********************************************************
// REQUEST CANCEL SORT DATE
// *********************************************************
export const reqCancelSortDate = (params) => {
    return {
        type: REQUEST_CANCEL_SORT_DATE,
        params
    }
}

// *********************************************************
// REQUEST FETCH FOSSIL
// *********************************************************
export const reqFetch = (params) => {
    return {
        type: REQUEST_FETCH_FOSSIL,
        params
    }
}
export const reqFetchSuccess = (data) => {
    return {
        type: REQUEST_FETCH_FOSSIL_SUCCESS,
        payload: data
    }
}
export const reqFetchFail = (error) => ({
    type: REQUEST_FETCH_FOSSIL_FAIL,
    payload: error
})