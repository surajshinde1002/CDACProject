import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../../config'
import './SHome.css'

const SHome = () => {
    const [book_id, setBook_Id] = useState('')
      const navigate = useNavigate()
      const { stud_id } = sessionStorage

     const bookRequest = () => {
        if (book_id.length == 0) {
          toast.warning('please enter book id')
        } 
         else {
          const body = {
           book_id,
          };

          const url = `${URL}/student/request/${stud_id}`

          axios.post(url,body).then((response) => {
            const result = response.data
              if (result['status'] == 'success') {
                console.log("found a book:");
                toast.success('Requested for book')
              } else {
                toast.error(result['error'])
              }
          })
        }

    }


    return (
        <div className='container'>
         
          <h1 className="title"></h1> 
    
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="form">
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                  <h3> Enter Book Id :
                  </h3>
                  </label>
                  <input
                    onChange={(e) => {
                      setBook_Id(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                  />
                </div>


                <div className="mb-3">
              <div><Link to="/requestbook"></Link></div>
              <button onClick={bookRequest} className="btn btn-primary">
              bookRequest
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
export default SHome
  