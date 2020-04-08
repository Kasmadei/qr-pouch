import { ReduxState, ReduxAction, ADD_BUSINESS, UPDATE_VOUCHER, Business } from '../types';

const initState: ReduxState = {
    activeBusinesses: [{
        name: "test",
        uuid: "test-test-12",
        voucher: {
            numberOfScans: 3,
            metadata: {
                numberOfExpectedScans: 12
            }
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
        case UPDATE_VOUCHER: {
            const copy = { ...state }
            const id = action.payload;
            const updatedActiveBusinesses = copy.activeBusinesses.map((b: Business) => {
                if(b.uuid === id) {
                    return {
                        ...b,
                        voucher: {
                            numberOfScans: b.voucher.numberOfScans + 1,
                            metadata: {
                                ...b.voucher.metadata
                            }
                        }
                    }
                }
                return b
            })
            return {
                ...state,
                activeBusinesses: updatedActiveBusinesses
            }
        }
        default:
            return state
    }
} 