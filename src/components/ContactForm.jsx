
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_0ddssn9', 'template_44q61jg', form.current, {
                publicKey: 'rtB0jEwqQQDZWNFwk',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (

        <div className='flex justify-center items-center h-screen'>
            <div className='bg-orange-400 p-5 rounded-md w-3/12'>
                <div className='justify-center flex text-2xl pb-5 font-semibold'>
                    <h3>Post Comments</h3>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
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
                            <button className='bg-gray-300 w-full rounded-md p-2 font-semibold shadow-[0_0px_5px_3px_rgba(0,0,0,0.1)]' >Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactForm