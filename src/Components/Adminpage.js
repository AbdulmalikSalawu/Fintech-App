import React, {useEffect, useState} from 'react'

function Adminpage() {

    const [data, setData] = useState([])
    useEffect(()=> {
        // fetch("https://abdulmalikyinka.onrender.com/allUsers", {
            getAllUsers()
        // fetch("http://localhost:5000/allUsers", {
        // method: "GET",})
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data, "allCustomers")
        //     setData(data.data)
        // })
    }, [])

    const getAllUsers = () => {
        fetch("http://localhost:5000/allUsers", {
        method: "GET",})
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "allCustomers")
            setData(data.data)
        })
    }

    const deleteUser = (paramId,paramName) => {
        if(window.confirm(`are you deleting ${paramName}`)){
            // fetch("https://abdulmalikyinka.onrender.com/deleteUser", {
                fetch("http://localhost:5000/deleteUser", {
                  method: "POST",
                  crossDomain: true,
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                  body: JSON.stringify({
                    uniqueid:paramId,
                  }),
                })
                .then((res)=>res.json())
                .then((data)=> {
                    alert(data.data)
                    getAllUsers()
                  })
        } else {

        }
    }

  return (
    <div>
        <h1>Welcome Admin</h1>
        <table class='table table-bordered mt-5'>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
                {/* <th scope="col">S/N</th> */}
            </tr>
            {data.map(i=>{
                return(
                    <tr key={i._id}>
                        <td key={i.firstname}>{i.firstname}</td>
                        <td key={i.email}>{i.email}</td>
                        <td key={i._id} onClick={() => deleteUser(i._id,i.firstname)}>🗑</td>
                        {/* <td>{i._id}</td> */}
                        {/* <td>{i.phoneNumber}</td> */}
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Adminpage
