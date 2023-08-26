import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'


function Protected(props) {
    let Cmp=props.Cmp
    const navigate = useNavigate()
    useEffect(() =>{
        if (!sessionStorage.getItem('loginStatus')) {
            navigate('/Error')
        }
    },[])
  return (
    <div><Cmp /></div>
  )
}

export default Protected