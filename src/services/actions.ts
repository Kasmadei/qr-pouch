import { Alert } from 'react-native';
import { Dispatch } from "redux"
import { Business, ADD_BUSINESS } from "../types"

export const addBusiness = (newBusiness: Business) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: ADD_BUSINESS,
                payload: newBusiness
            })
        } catch (error) {
            Alert.alert(error, error.message)
        }
    }
}