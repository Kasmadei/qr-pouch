import { ReduxState, ReduxAction, SET_QR_CODE } from '../types';

const initState: ReduxState = {
    acceptedQrCodes: {}
}

export default function mainReducer(state: ReduxState = initState, action: ReduxAction): ReduxState {
    switch (action.type) {
        case SET_QR_CODE: {
            const tempQr = action.payload
            const newState = { acceptedQrCodes: { ...state.acceptedQrCodes, ...tempQr } }
            return newState
        }
        default:
            return state
    }
} 