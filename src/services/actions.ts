import { Alert } from 'react-native';
import { Dispatch } from "redux"
import { Business, ADD_BUSINESS, UPDATE_VOUCHER } from "../types"

export const addBusiness = (newBusiness: Business) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: ADD_BUSINESS,
                payload: newBusiness
            })
        } catch (error) {
            Alert.alert('addBusiness fail', error.message)
        }
    }
}

export const updateVoucher = (uuid: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: UPDATE_VOUCHER,
                payload: uuid
            })
        } catch (error) {
            Alert.alert('updateVoucher fail', error.message)
        }
    }
}