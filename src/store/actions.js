import { INCREMENT, DECREMENT, RESET1, RESET, SUBMIT, TABLE_DATA_SUBMIT, FETCH_DATA } from './actionTypes'
import axios from 'axios'


export const incrementValue = (num) => dispatch => {
    dispatch({ type: INCREMENT, payload: num })

}

export const decrementValue = (num) => dispatch => {
    dispatch({ type: DECREMENT, payload: num })
}

export const reset = () => dispatch => {
    dispatch({ type: RESET })
}

export const submitForm = (data) => dispatch => {

    dispatch({ type: SUBMIT, payload: data })
}
export const reset1 = () => dispatch => {

    dispatch({ type: RESET1 })
}
export const dataSubmit = (data) => dispatch => {
    dispatch({ type: TABLE_DATA_SUBMIT, payload: data })
}

export const fetchData = () => dispatch => {
    axios.get("https://obscure-reef-33236.herokuapp.com/api/v1/service/categories-fe")
        .then((response) => {
            console.log(response)
            dispatch({type:FETCH_DATA, payload:response.data})
        })
}