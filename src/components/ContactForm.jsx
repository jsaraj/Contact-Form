

import React from 'react'

function ContactForm() {
    return (

        <div className='flex justify-center items-center h-screen'>
            <div className='bg-orange-400 p-5 rounded-md w-3/12'>
                <div className='justify-center flex text-2xl pb-5 font-semibold'>
                    <h3>Post Comments</h3>
                </div>
                <div>
                    <div className='py-3'>
                        <input type='text' name='name' placeholder='Your Name:' className='w-full rounded-md p-2 focus:outline-none'></input>
                    </div>
                    <div className='py-3'>
                        <input type='email' name='email' placeholder='Your Email' className='w-full rounded-md p-2 focus:outline-none'></input>
                    </div>
                    <div className='py-3'>
                        <textarea name='message' placeholder='Your Message' rows='6' className='w-full rounded-md p-2 focus:outline-none'></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-gray-300 w-full rounded-md p-2 font-semibold'>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactForm