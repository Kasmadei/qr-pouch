import { RESET_VOUCHER, DELETE_BUSINESS, DELETE_ALL_BUSINESSES } from './../types';
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
            await manager.getAllBusinessesAsync().then(allBusinesses => {
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

export const resetVoucher = (id: string, manager = _manager) => {
    return async (dispatch: Dispatch) => {
        try {
            await manager.resetBusinessAsync(id).then((allBusinesses) => {
                dispatch({
                    type: RESET_VOUCHER,
                    payload: allBusinesses
                })
            })
        } catch (error) {
            Alert.alert(error, error.message)
        }
    }
}

export const deleteBusiness = (id: string, manager = _manager) => {
    return async (dispatch: Dispatch) => {
        try {
            await manager.deleteBusinessAsync(id).then((allBusinesses) => {
                dispatch({
                    type: DELETE_BUSINESS,
                    payload: allBusinesses
                })
            })
        } catch (error) {
            Alert.alert(error, error.message)
        }
    }
}

export const deleteAllBusinesses = (manager = _manager) => {
    return async (dispatch: Dispatch) => {
        try {
            await manager.deleteAllBusinessesAsync().then((allBusinesses) => {
                dispatch({ 
                    type: DELETE_ALL_BUSINESSES, 
                    payload: allBusinesses 
                })
            })
        } catch (error) {
            Alert.alert(error, error.message)
        }
    }
}