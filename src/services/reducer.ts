import { ReduxState, ReduxAction, ADD_BUSINESS } from '../types';

const initState: ReduxState = {
    activeBusinesses: [{
        name: "test18",
        uuid: "test",
        voucher: {
            numberOfExpectedScans: 18,
            numberOfScans: 2
        }
    }]
}

export default function mainReducer(state: ReduxState = initState, action: ReduxAction): ReduxState {
    switch (action.type) {
        case ADD_BUSINESS: {
            return {
                ...state,
                activeBusinesses: [...state.activeBusinesses, action.payload]
            }
        }
        default:
            return state
    }
} 