import React, { useState } from "react";
import Button from "./Button";
import axios from 'axios'
import Spinner from "./Spinner";
import { useNavigate, Link } from 'react-router-dom'
import Home from "./Home";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)

  const [register, setregister] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  })

  const { errors } = register

  const newUser = {
    name: register.name,
    email: register.email,
    password: register.password,
    password2: register.password2,
  }

  const onChange = (e) => {
    setregister({ ...register, [e.target.id]: e.target.value })
  }


  const onSubmit = async (e) => {
    e.preventDefault()
    setloading(true)


  await   axios.post('https://cloverrmern.herokuapp.com/api/users/register', newUser)
      .then((res) => {
        // console.log(res);

        res.data?.success ? localStorage.setItem('token', 'success') : ''
        console.log(newUser);
        navigate('/')

      }).catch((err) => {
        console.log(err);
        const data = Object.values(err.response.data)
        // console.log(data);
        alert(data)
      });
      setloading(false)

  }


  return (
    <>
    {/* <Home/> */}
      <section className=" body-font">
        <div className="container px-5  mx-auto flex flex-wrap items-center">
          <div className="relative lg:w-3/6 md:w-1/2  rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">

            <form onSubmit={onSubmit} className='bg-white/[0.21] px-16 py-10 rounded-2xl'>
              <h2 className="text-white text-center text-3xl font-medium title-font mb-5">
                Sign Up
              </h2>
              <div className="relative mb-4 text-white">
                <label
                  for="name"
                  className="leading-7 text-sm text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name" onChange={onChange} value={register.name} error={errors.name}
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " 
                />
              </div>

              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" onChange={onChange} value={register.email} error={errors.email}
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
                  name="password" onChange={onChange} value={register.password} error={errors.password}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="password2"
                  className="leading-7 text-sm text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password2"
                  name="password2" onChange={onChange} value={register.password2} error={errors.password2}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div type='submit' className="my-6 grid">
                {loading === false ?
                  <Button
                    hoverColor={"bg-gray-700"}
                    margin={"text-base justify-center "}
                    name={"Sign Up"} /> : <Spinner />
                }

              </div>
              <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account?

                <Link to="/login"><a href="#!"
                  className=" mx-2 text-white"  >Log in</a></Link> </p>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
