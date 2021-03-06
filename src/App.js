import React from 'react'
import Counter from './practise/counter'
import Form from './practise/Form'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { fetchData } from './store/actions'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
    
  }, [])




  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-primary">Practise</h2>
        </div>

        <div className="col-12">
        {/* <Counter /> */}
        <Form />
        </div>
      </div>
    </div>
  )
}

export default App
