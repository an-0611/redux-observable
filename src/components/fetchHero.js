import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from '../actions/fetchHeroActions';

export default function fetchHero() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('http://hahow-recruit.herokuapp.com/heroes') // fetch('http://hahow-recruit.herokuapp.com/heroes/1/profile')
        .then(res => res.json())
        .then(res => {
            // if (res.error) { // if api have error prototype
            //     throw(res.error);
            // }
            dispatch(fetchProductsSuccess(res));
            // return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}