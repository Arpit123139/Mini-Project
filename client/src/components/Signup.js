import './Signup.css';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {Helmet} from 'react-helmet';
const RegisterUser = () => {
    const history = useHistory("");

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        password:"",
        url:""
    })

    const[image,setImage]=useState('')
    const[url,setUrl]=useState('')

    const setdata = (e) => {
        
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const addinpdata = async (e) => {
        e.preventDefault();

        const { name,email,password} = inpval;
        const imageUrl="";
        const formdata=new FormData();
        formdata.append('file',image)
        formdata.append("upload_preset","j7hjcv76")
        formdata.append("cloud_name","dsojdaybz")

        const res1=await fetch('https://api.cloudinary.com/v1_1/dsojdaybz/image/upload',{
          method:"post",
          body:formdata
        })
        
        const ImgData=await res1.json()
        const url=ImgData.url
        setUrl(url)
        console.log("Image url !!!!!!!!!!!!!!!!!!!!!!!!!"+ImgData.url)
        
        const res = await fetch("/api/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email,password,url
            })
        });

        const data = await res.json();

        if (res.status === 422 ) {
            console.log("error ");
            alert("error1");

        } else {
            alert("added");
            console.log("data added");
            history.push("/");
        }
        
        
    }

      const handleImageInput=(e)=>{
        console.log(e.target.files)
        setImage(e.target.files[0]);
      }
  return (
    <div class="login-box">
      <Helmet>
                <style>{'body { background: linear-gradient(#141e30, #243b55); }'}</style>
            </Helmet>
  <h2>Signup</h2>
  <form  >
  <div class="user-box">
      <input type="file" onChange={handleImageInput} name="image1"  />
      <label>ProfileImage</label><br></br>

      <image src={url}></image>
    </div>
    <div class="user-box">
      <input type="text" value={inpval.name} onChange={setdata} name="name" required="" />
      <label>Name</label>
    </div>
    <div class="user-box">
      <input type="email" value={inpval.email} onChange={setdata} name="email" required="" />
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" value={inpval.password} onChange={setdata} name="password" required="" />
      <label>Password</label>
    </div>
    
    <button class="btn-sub" type="submit" onClick={addinpdata} >  
    <a>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
          Submit1
    </a>
      </button>
      
  </form>
</div>
  )
}

export default RegisterUser