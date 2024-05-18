import React, {useEffect, useState} from 'react'

function Adminpage() {

    const [data, setData] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [click, setClick] = useState(false)
    useEffect(()=> {
            getAllUsers()
    }, [searchQuery])

    const getAllUsers = () => {
        fetch(`https://abdulmalikyinka.onrender.com/allUsers?search=${searchQuery}`, {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "allCustomers")
            setData(data.data)
        })
    }

    // const inputClicked = () => {
    //    setSearchQuery("yes click")
    // }

    // if(click){
    //     setSearchQuery("yes click")
    // } else {setSearchQuery("no click")}

 
    const deleteUser = (paramId,paramName) => {
        if(window.confirm(`are you deleting ${paramName}`)){
            fetch("https://abdulmalikyinka.onrender.com/deleteUser", {
                // fetch("http://localhost:5000/deleteUser", {
                  method: "POST",
                  crossDomain: true,
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    // "Access-Control-Allow-Origin": "*",
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

    const handleSearch = (e) => [
        setSearchQuery(e.target.value)
    ]

  return (
    <div>
        <h1 className='mt-5 pt-5 text-center'>List of all Students📕</h1>


        <table class='table table-striped mt-3 d-block m-auto'>
            <input type='text' id='myInput' placeholder='search...' onChange={handleSearch}
                style={{
                    padding: "8px 22px 8px 22px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "50px",
                    boxSizing: "border-box",
                    marginBottom: "1rem"
                }}
            />
            <span
                style={{
                    position: "absolute",
                    right: "10", top: "8", 
                    color: "black",
                    fontSize: "2rem"
                }}>
                    Total:{data.length}
                </span>

            <thead class="thead-dark bg-dark text-white">
                <tr>
                    <th class="col-4 text-center fs-5" scope="co">S/N</th>
                    <th class="col-4 text-center fs-5" scope="co">NAME</th>
                    <th class="col-4 text-center fs-5" scope="co">EMAIL</th>
                    <th class="col-4 text-center fs-5" scope="co">DELETE</th>
                </tr>
            </thead>
            {data.map(i=>{
                return(
                    <tr key={i._id}>
                        <td class="text-center fs-4" key={i._id}>{i.id}</td>
                        <td class="text-center fs-5" key={i.firstname}>{i.firstname}</td>
                        <td class="text-center fs-5" key={i.email}><i>{i.email}</i></td>
                        <td class="text-center fs-4" key={i._id} onClick={() => deleteUser(i._id,i.firstname)}>🗑</td>
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
