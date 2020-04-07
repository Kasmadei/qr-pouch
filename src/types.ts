export interface ReduxAction {
    type: string,
    payload?: any
}

export interface ReduxState {
    activeBusinesses: Business[]
}

export interface Business {
    uuid: string,
    name: string,
    voucher: VoucherConfig
}

export interface VoucherConfig {
    numberOfExpectedScans: number,
    numberOfScans: number
}

// actions
export const ADD_BUSINESS = "ADD_BUSINESS" 


// routes
export const HOME = "HOME"
export const ABOUT = "ABOUT"
export const DETAILS = "DETAILS"
export const QR_READER = "QR_READER"
export const CREATE_BUSINESS = "CREATE_BUSINESS"