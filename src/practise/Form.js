import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataSubmit, reset1, submitForm } from '../store/actions'

const Form = () => {

    const dispatch = useDispatch()
    const state1 = useSelector(state => state.form)
    const reduxTable=useSelector(state=>state.form.tableData)

    const [table, setTable] = useState([]);


    const [state, setState] = useState({
        name: "",
        age: null,
        contact: null
    })

    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm(state))
        setTable([...table, state])

        dispatch(dataSubmit(state))
        setState({
            name: "",
            age: 0,
            contact: 0
        })
    }

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(reset1());
        setState({
            name: "",
            age: "",
            contact: ""
        })
    }


    console.log(table, "******")
    return (
        <div>
            <form onSubmit={handleSubmit} onReset={handleReset} >
                <label>
                    Name:
            <input type="text" name="name" value={state.name} onChange={(e) => handleChange(e)} />
                </label>
                <label>
                    Age:
            <input type="number" name="age" value={state.age} onChange={handleChange} />
                </label>
                <label>
                    contact:
            <input type="number" name="contact" value={state.contact} onChange={handleChange} />
                </label>
                <button type="submit" >boom</button>
                <button type="reset">gayab</button>
            </form>


            {/* <p> value: {state1.name} {state1.age} {state1.contact} </p> */}


            <div className="row mt-5">
                <div className="col-12">


                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                reduxTable.map((data , index) => (

                                    <tr key={index}>
                                        <th scope="row">{index +1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.contact}</td>
                                    </tr>
                                )
                                )
                            } */}

{
                                reduxTable.map((data , index) => (

                                    <tr key={data.id}>
                                        <th scope="row">{index +1}</th>
                                        <td>{data.title}</td>
                                        <td>{data.body}</td>
                                        <td>{data.id}</td>
                                    </tr>
                                )
                                )
                            }


                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Form
