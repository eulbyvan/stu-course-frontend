import React from 'react';

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Sun Jan 01 2023 14:31:26
 * Copyright (c) 2023
 */

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Sun Jan 01 2023 14:41:54
 * Copyright (c) 2023
 */


const AddUser = () => {
    return (
        <div className='flex max-w-2xl mx-auto shadow border-b'>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Sign Up</h1>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Display Name</label>
                    <input type='text' className='h-10 w-96- border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Username</label>
                    <input type='text' className='h-10 w-96- border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Password</label>
                    <input type='password' className='h-10 w-96- border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-center justify-center h-14 w-full my-4 space-x-2 pt-2'>
                    <button className='rounded text-white font-semibold bg-gray-800 hover:bg-gray-600 px-2 py-2'>Sign Up</button>
                    <button className='rounded text-white font-semibold bg-red-800 hover:bg-red-400 px-2 py-2'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddUser;