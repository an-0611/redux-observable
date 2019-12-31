import { combineReducers } from 'redux'
import productsReducer from './hero'
import profile from './profile'

const reducer = combineReducers({
	productsReducer,
	profile,
})

export default reducer;