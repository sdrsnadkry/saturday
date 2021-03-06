import { FETCH_DATA, RESET1, SUBMIT, TABLE_DATA_SUBMIT } from "./actionTypes";


const initialState = {
    name: "",
    age: null,
    contact: null,
    tableData:[]
}

const formReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SUBMIT:
            return {
                ...state,
                name: payload.name,
                age: payload.age,
                contact: payload.contact
            }
        case RESET1:
            return {
                name: "",
                age: null,
                contact: null,
            }
        case TABLE_DATA_SUBMIT:
            return{
                ...state,
                tableData:[...state.tableData,payload]
            }

        case FETCH_DATA:
            return {
                ...state,
                tableData:payload
            }

        default:
            return state;
    }

}



export default formReducer;