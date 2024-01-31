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
        <table class='mt-5'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
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
        <h1>Welcome Admin</h1>
    </div>
  )
}

export default Adminpage
