import React from 'react'
import { IoMenu } from "react-icons/io5";

function NavMenu() {
    return (
        <div className='flex justify-end absolute cursor-pointer z-50 top-6 right-6 border border-slate-300 rounded-xl'>
            <div className='flex justify-between items-center gap-2 px-2'>
                <p className='text-white text-xs'>{`MENU`}</p>
                <IoMenu className='h-6 w-5 text-white' />
            </div>
        </div>
    )
}

export default NavMenu