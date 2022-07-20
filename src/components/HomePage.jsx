import React from 'react'
import Button from './Button'
import Home from './Home'
import { Link } from 'react-router-dom'
const HomePage = ({ name, email }) => {
    return (
        <>
<div className='flex justify-center items-center h-96'>
    <Link to='/signup'>
            <Button
                btnColor={"gray-800"}
                hoverColor={"bg-gray-700"}
                margin={"text-base justify-center w-60"}
                name={"Sign Up"} />
</Link>
<Link to='/login'>
            <Button
                btnColor={"gray-800"}
                hoverColor={"bg-gray-700"}
                margin={"text-base justify-center w-60 ml-6"}
                name={"Login"} />
                </Link>
</div>
        </>

    )
}

export default HomePage