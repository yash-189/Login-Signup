import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Home from "./Home";
import HomePage from "./HomePage";
import Login from "./Login";
import Signup from "./Signup";
const Navbar = () => {
    return (
        <>
        <Home/>
            <header className="text-gray-400 body-font relative">
                <div className="container mx-auto flex flex-wrap p-5   md:flex-row justify-between items-center ">
                    <Link
                        to=""
                        className="flex title-font font-medium items-center text-white  md:mb-0 basis-1/4"
                    >
                        <span className=" md:text-xl text-base  py-2 px-6 rounded border-2">
                            User
                        </span>
                    </Link>

                    <form className=" m-auto basis-2/4 text-center">
                        <input
                            type="search"
                            placeholder="Search here"
                            className="outline-none sm:w-[32rem] md:w-96 w-auto	 p-2	 rounded-lg"
                        />
                        <button
                            className="
                        inline-flex items-center bg-[#b9b9b938] border-0 py-2 px-3 focus:outline-none hover:bg-gray-500  text-base mt-4 rounded-lg ml-2
                         "
                        >
                            Search
                        </button>
                    </form>
                    <div className="basis-1/4 text-end">

                   <Link to='/signup' >
                    <Button
                        hoverColor={"bg-gray-700"}
                        margin={"text-base  "}
                        name={"Signup"}/>
                        </Link>
                        <Link to='login'>
                     <Button
                        hoverColor={"bg-gray-700"}
                        margin={"text-base ml-2  "}
                        name={"Login"}
                    /></Link>
                    </div>

                </div>
            </header>
        </>
    );
};

export default Navbar;
