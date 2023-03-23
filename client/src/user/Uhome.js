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
const Uhome = () => {

    const history = useHistory("");


    const [getuserdata, setDiseasedata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);


    const getdata = async () => {

        const res = await fetch(`/getuserdata/${id}`, {
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
    THIS IS HOME
        </>
  )
}

export default Uhome