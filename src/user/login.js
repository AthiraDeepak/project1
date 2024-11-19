import {useState} from 'react';

const Mylogin = () =>{
    let[email, setEmail] = useState("");
    let[password, setPassword] = useState("");
    let[message, setMessage] = useState("Enter login details");

    const loginCheck = () =>{
        if(email=="" || password==''){
            setMessage("Empty Email or Password")
        }else{
            setMessage("Please Wait Validating...");
            fetch("http://localhost:1234/sellerapi")
            .then(response=>response.json())
            .then(sellerArray=>{
                let userfound = false;
                sellerArray.map((seller, index)=>{
                    if(seller.username==email && seller.password == password){
                        setMessage("Login Success ! Redirecting...");
                        userfound = true;
                        localStorage.setItem("sellerid", seller.id);
                        localStorage.setItem("sellername", seller.fullname);
                        window.location.reload();
                    }
                })  // map end

                if(userfound==false){
                    setMessage("Login Fail ! Invalid or Not Exists");
                }
            })
        }
    }

    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-xl-4'></div>
                <div className='col-xl-4'>
                    <div className='card border-none shadow-lg'>
                        <div className='card-header bg-primary text-white'>Login</div>
                        <div className='card-body'>
                            <p className='text-danger text-center mb-2'> {message} </p>
                            <div className='mb-3'>
                                <label>e-Mail Id</label>
                                <input type="email" className='form-control'
                                onChange={obj=>setEmail(obj.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <label>Password</label>
                                <input type="password" className='form-control'
                                onChange={obj=>setPassword(obj.target.value)}/>
                            </div>
                        </div>
                        <div className='card-footer text-center'>
                            <button className='btn btn-danger' onClick={loginCheck}>Login</button>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4'></div>
            </div>
        </div>
    )

}

export default Mylogin;