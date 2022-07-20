import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import Spinner from "./Spinner";
import { useNavigate, Link } from 'react-router-dom'
import Home from "./Home";


const Login = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)
  const [login, setlogin] = useState({
    email: "",
    password: "",
    errors: {}
  })

  const { errors } = login

  const onChange = (e) => {
    setlogin({ ...login, [e.target.id]: e.target.value })
  }

  const api = 'https://cloverrmern.herokuapp.com/api/users/login'


  const onSubmit = async (e) => {
    e.preventDefault();
    setloading(true)

   await axios.post(api, {
      email: login.email,
      password: login.password
    })
      .then((res) => {
        // console.log(res.data);
        res.data?.success ? localStorage.setItem('token', res.data.token) : ''
        navigate('/')

      }).catch((err)  =>  {
        console.log(err);
        const data = Object.values(err.response.data)
        // console.log(data);
        alert(data)
        

      });
      setloading(false)


  }


  return (
    <>
    <Home/>
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="relative lg:w-3/6 md:w-1/2  rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">

            <form onSubmit={onSubmit} className='bg-white/[0.21] p-16 rounded-2xl'>
              <h2 className="text-white text-center text-3xl font-medium title-font mb-5">
                Login
              </h2>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" onChange={onChange} value={login.email} error={errors.email}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="password"
                  className="leading-7 text-sm text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password" onChange={onChange} value={login.password} error={errors.password}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div type='submit' className="my-6 grid">

                {loading === false ?
                  <Button
                   
                    hoverColor={"bg-gray-700"}
                    margin={"text-base justify-center "}
                    name={"Login"} /> :
                  <Spinner />
                }



              </div>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?

                <Link to="/signup"><a href="#!"
                  className=" mx-2 text-white"  >Sign up now</a></Link> </p>

            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
