import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams,useHistory } from 'react-router-dom'
import Navbbar from "./Navbbar"
const UserDetails = () => {

    const history = useHistory("");


    const [getuserdata, setDiseasedata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);


    const getdata = async () => {

        const res = await fetch(`/getuserda/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setDiseasedata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

 


  return (
    <>
    <Navbbar />
    <div className="add_btn mt-2 mb-2">
    <a class="nav-link" href={`http://localhost:3000/enterudata/${id}`}>home</a>
      </div>
    <div className="container mt-3">
            <Card sx={{ maxWidth: 800 }}>
                <CardContent>
                    <div className="add_btn" align="right">
                    <NavLink to={`/enterudata/${id}`}> <button className="btn btn-primary" >edit</button></NavLink>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >{getuserdata.name}</span></h3>
                            <h3 className="mt-3">email: <span >{getuserdata.email}</span></h3>
                            <h3 className="mt-3">phone no :<span >{getuserdata.phoneno}</span></h3>
                            <h3 className="mt-3">age: <span >{getuserdata.age}</span></h3>
                            <h3 className="mt-3">height: <span >{getuserdata.height}</span></h3>
                            <h3 className="mt-3">address: <span >{getuserdata.address}</span></h3>
                            <h3 className="mt-3">city: <span >{getuserdata.city}</span></h3>
                            
                            
                        </div>
                        
                    </div>

                </CardContent>
            </Card>
        </div>
        </>
  )
}

export default UserDetails