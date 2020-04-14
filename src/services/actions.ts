import { Manager } from './../mock/manager';
import { Alert } from 'react-native';
import { Dispatch } from "redux"
import { Business, CREATE_NEW_BUSINESS, UPDATE_VOUCHER, SET_BUSINESSES } from "../types"

const _manager = new Manager();

export const createBusiness = (business: Business, manager = _manager) => {
    return async (dispatch: Dispatch) => {
        try {
            manager.createBusinessAsync(business).then(businesses => {
                dispatch({
                    type: CREATE_NEW_BUSINESS,
                    payload: businesses
                })
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

export const setAllBusinesses = (manager = _manager) => {
    return async (dispatch: Dispatch) => {
        try {
            manager.getAllBusinessesAsync().then(allBusinesses => {
                dispatch({
                    type: SET_BUSINESSES,
                    payload: allBusinesses
                })
            })
        } catch (error) {
            Alert.alert(error, error.message)
        }
    }
}