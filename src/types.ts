// types
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
    voucher: VoucherState
}

export interface VoucherState {
    numberOfScans: number,
    metadata: VoucherMetadata
}

export interface VoucherMetadata {
    numberOfExpectedScans: number,
}

// actions
export const ADD_BUSINESS = "ADD_BUSINESS" 
export const UPDATE_VOUCHER = "UPDATE_VOUCHER"

// routes
export const HOME = "HOME"
export const ABOUT = "ABOUT"
export const DETAILS = "DETAILS"
export const QR_READER = "QR_READER"
export const CREATE_BUSINESS = "CREATE_BUSINESS"