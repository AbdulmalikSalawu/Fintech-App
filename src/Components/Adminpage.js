import React, {useEffect, useState} from 'react'

function Adminpage() {

    const [data, setData] = useState([])
    useEffect(()=> {
        fetch("http://localhost:5000/allUsers", {
        method: "GET",})
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "allCustomers")
            setData(data.data)
        })
    }, [])

  return (
    <div>
        <h1>Welcome Admin</h1>
        <table class='table table-bordered mt-5'>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
            </tr>
            {data.map(i=>{
                return(
                    <tr>
                        <td>{i.firstname}</td>
                        <td>{i.email}</td>
                        <td>{i.phoneNumber}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Adminpage
