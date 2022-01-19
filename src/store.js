import {createStore,combineReducers,applyMiddleware} from 'redux'  //Middleware is not must
import thunk from 'redux-thunk'
import {restaurantListReducer} from './reducers/restaurantReducers'


const reducers = combineReducers({

    restaurantReducer: restaurantListReducer


})


const initialState={};
const middleware=[thunk];


const store = createStore(reducers,initialState,applyMiddleware(...middleware));

export default store


