import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const RegisterUser = () => {
    const history = useHistory("");

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        password:"",
        phoneno: "",
        height: "",
        age: "",
        weight:"",
        address: "",
        city: ""
        
    })

    const setdata = (e) => {
        console.log(e.target.value);
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

        const { name,email,password,phoneno,height,age,weight,address,city} = inpval;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email,password,phoneno,height,age,weight,address,city
            })
        });

        const data = await res.json();

        if (res.status === 422 ) {
            console.log("error ");
            alert("error1");

        } else {
            alert("added");
            console.log("data added");
            history.push("/index");
        }
    
    
    }


  return (
    <div className="container">
        <h1>signup</h1>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">password</label>
                        <input type="password"  value={inpval.password} onChange={setdata} name="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    

                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
  )
}

export default RegisterUser