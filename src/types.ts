export interface ReduxAction {
    type: string,
    payload?: any
}

export interface ReduxState {
    acceptedQrCodes: AcceptedQrCodes,
}

export interface AcceptedQrCodes {
    [decodedString: string]: string
}

// actions
export const SET_QR_CODE = "SET_QR_CODE" 

// routes
export const HOME = "HOME"
export const ABOUT_AND_FEEDBACK = "ABOUT_AND_FEEDBACK"
export const DETAILS = "DETAILS"
export const ADD_BUSINESS = "ADD_BUSINESS"