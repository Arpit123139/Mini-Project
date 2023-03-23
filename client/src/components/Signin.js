import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
const Signinuser = () => {
    const history = useHistory("");

    const [inpval, setINP] = useState({
        email: "",
        password: ""
        
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

        const { email, password } = inpval;

        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        alert(data._id);
        if (res.status === 201 || !data) {
            console.log("error ");
            alert("error user not found");

        } else {
            alert("Signin");
            console.log("data added");
            history.push(`/uhome/${data._id}`);
        }
    }
  return (
    <div className="container">
        <h1>signin</h1>
            <form className="mt-4">
                <div className="row">
                    
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

export default Signinuser