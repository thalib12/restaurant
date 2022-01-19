import {
    RESTAURANTS_LIST_REQUEST,
    RESTAURANTS_LIST_SUCCESS,
    RESTAURANTS_LIST_FAIL
} from '../constants/restaurantConstants'

export const restaurantListReducer = (states = { restaurants: [] }, actions) => {

    switch (actions.type) {
        case RESTAURANTS_LIST_REQUEST:
            return { restaurants: [] }

        case RESTAURANTS_LIST_SUCCESS:
            return { restaurants: actions.payload }

        case RESTAURANTS_LIST_FAIL:
            return { restaurants: actions.payload }


        default:
            return states
    }
}