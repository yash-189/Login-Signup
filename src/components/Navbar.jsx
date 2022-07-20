import React from "react";
import { Link} from "react-router-dom";
import Button from "./Button";
import Home from "./Home";


const Navbar = () => {
    
    const token = localStorage.getItem("token");


    return (
        <>
            <Home />
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
                        {token === null ?
                            

                           <>
                                <Link to='/signup' >
                                    <Button
                                        hoverColor={"bg-gray-700"}
                                        margin={"text-base  "}
                                        name={"Signup"} />
                                </Link>
                                <Link to='login'>
                                    <Button
                                        hoverColor={"bg-gray-700"}
                                        margin={"text-base ml-2  "}
                                        name={"Login"}
                                    /></Link>
                            </>:
                            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                            }
                    </div>

                </div>
            </header>
        </>
    );
};

export default Navbar;
