import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
    counter: 0,
    abc:0
}

const counterReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + payload
            }

          case DECREMENT:
              return{
                  ...state,
                  abc:state.abc-payload
              }  
        default:
            return state
    }
}

export default counterReducer