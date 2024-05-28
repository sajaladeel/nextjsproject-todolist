import Link from 'next/link';
import React from 'react';

function Navbar(){
    return(
        <div className=' main-bg h-[60px] flex px-1 lg:px-4 items-center justify-around'>

<div className='uppercase cursor-pointer text-sm lg:text-lg'>
<span className=' text-black 
bg-white
pl-2
rounded
hover:bg-black
hover:text-white
px-4 py-4 

'>BY SAJAL ADEEL</span>
</div>

<div className='flex-gap-1 lg:gap-2 text-xl '></div>

<Link className="bg-black
p1- rounded text-white
hover:bg-white  px-2 py-2
hover:text-black

" href={'/'}>Home</Link>

<Link className="bg-black
p1- rounded text-white  px-2 py-2
hover:bg-white  hover:text-black" href={'/todo'}>Todo</Link>

{/* <div className='flex-gap-1 lg:gap-4 lg:text-xl text-sm'>
    <button className='bg-orange-400
    p-1 rounded text-white hover:bg-orange-600'>Sign In</button>
    <button className=' bg-orange-400
    p-1 rounded text-white hover:bg-orange-600'> Sign Up</button>
</div> */}


        </div>
    )
}

export default Navbar;