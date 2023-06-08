import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [showPopup, setShowPopup] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setShowPopup(true)
        // EmailJS configuration
        console.log(name, "name")
        if (email && name) {
            toast.success("hurrey !! we are friends now...", { autoClose: 3000 });
            const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message,
            };
            const serviceID = 'service_qyp9w6k';
            const templateID = 'template_8u38m41';
            const userID = 'aZop8JHMok80iXQ1z';

            // Send email
            emailjs.send(serviceID, templateID, templateParams, userID)
                .then((response) => {
                    console.log('Email sent successfully!', response);
                    // Reset form fields
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
        }
        else {
            toast.error('Please give me your name and email...', { autoClose: 3000 });
        }

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div id='contact' className='max-w-[1240px] m-auto p-4 py-28 h-screen'>
            <h1 className='text-2xl font-bold text-center p-10'>Let&apos;s work together</h1>
            <form method='POST' className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    <input onChange={(e) => setName(e.target.value)} name='name' className='border shadow-lg p-3 rounded' type="text" placeholder='Name' />
                    <input onChange={(e) => setEmail(e.target.value)} name='email' className='border shadow-lg p-3 rounded' type="email" placeholder='Email' />
                </div>
                <input onChange={(e) => setSubject(e.target.value)} name='subject' className='border shadow-lg p-3 my-3 w-full rounded' type="text" placeholder='Subject' />
                <textarea onChange={(e) => setMessage(e.target.value)} className='border shadow-lg p-3 w-full rounded' name="message" id="" cols="30" rows="10" placeholder='Message' />
                <button type='submit' className='border shadow-lg w-full mt-3 p-3 rounded bg-blue-500 hover:bg-blue-600' onClick={handleSubmit}>
                    <p className='font-bold'>Submit</p>
                </button>
            </form>
            <ToastContainer className='fixed top-1/2 left-1/2 overflow-auto' />
        </div>
    )
}

export default Contact