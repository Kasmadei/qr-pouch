import { SET_BUSINESSES, RESET_VOUCHER, DELETE_BUSINESS, DELETE_ALL_BUSINESSES } from './../types';
import { ReduxState, ReduxAction, CREATE_NEW_BUSINESS, UPDATE_VOUCHER, Business } from '../types';

const initState: ReduxState = {
    activeBusinesses: []
}

export default function mainReducer(state: ReduxState = initState, action: ReduxAction): ReduxState {
    switch (action.type) {
        case CREATE_NEW_BUSINESS: {
            return {
                ...state,
                activeBusinesses: action.payload
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
        case SET_BUSINESSES: {
            return {
                ...state,
                activeBusinesses: action.payload
            }
        }
        case RESET_VOUCHER: {
            return {
                ...state,
                activeBusinesses: action.payload
            }
        }
        case DELETE_BUSINESS: {
            return {
                ...state,
                activeBusinesses: action.payload
            }
        }
        case DELETE_ALL_BUSINESSES: {
            return {
                ...state,
                activeBusinesses: action.payload
            }
        }
        default:
            return state
    }
} 