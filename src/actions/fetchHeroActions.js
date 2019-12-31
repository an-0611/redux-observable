export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'; // 1. define action name

export function fetchProductsPending() { // 2. define function and bring components payload data to reducer, must be object
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(data) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        data: data
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}
