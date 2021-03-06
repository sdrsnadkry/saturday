import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementValue, incrementValue } from '../store/actions';
const Counter = () => {
    const number = useSelector(state => state.counter.counter)
    const numb=useSelector(state=>state.counter.abc)
    const dispatch = useDispatch();


    const handleIncrement = () => {
        dispatch(incrementValue(2))
    }
     const handleDecrement=()=>{
         dispatch(decrementValue(2))
     }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={handleIncrement} className="btn btn-primary">increment</button>
            <h2>{numb}</h2>
            <button onClick={handleDecrement} className="btn btn-primary">decremnet</button>

                    
        </div>
    )
}

export default Counter
