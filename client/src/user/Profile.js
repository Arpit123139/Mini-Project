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


    const [getuserdata, setDiseasedata] = useState({});
    console.log("dsdsds ",getuserdata);

    const { token } = useParams("token");
    //alert(token);


    const getdata = async () => {

        const res = await fetch(`/api/user/profile/${token}`, {
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
            setDiseasedata(data.user)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

 


return (
    <>
    <Navbbar />
    <div className="container mt-3">
            <Card sx={{ maxWidth: 800 }}>
                <CardContent>
                    <div className="add_btn" align="right">
                    <NavLink to={`/enterudata/${token}`}> <button className="btn btn-primary" >edit</button></NavLink>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span >{getuserdata.name}</span></h3>
                            <h3 className="mt-3">email: <span >{getuserdata.email}</span></h3>
                            
                            
                        </div>
                        
                    </div>

                </CardContent>
            </Card>
        </div>
        </>
  )
}

export default UserDetails