import React, { useState } from 'react'
import emailjs from 'emailjs-com';


function Contact() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("")
    const [message,setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
    // EmailJS configuration
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
    return (
        <div className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 className='text-2xl font-bold text-center p-10'>Let&apos;s work together</h1>
            <form onSubmit={handleSubmit} method='POST' className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    <input onChange={(e) => setName(e.target.value)} name='name' className='border shadow-lg p-3 rounded' type="text" placeholder='Name' />
                    <input onChange={(e) => setEmail(e.target.value)} name='email' className='border shadow-lg p-3 rounded' type="email" placeholder='Email' />
                </div>
                <input onChange={(e) => setSubject(e.target.value)} name='subject' className='border shadow-lg p-3 my-3 w-full rounded' type="text" placeholder='Subject' />
                <textarea onChange={(e) => setMessage(e.target.value)} className='border shadow-lg p-3 w-full rounded' name="message" id="" cols="30" rows="10" placeholder='Message' />
                <button type='submit' className='border shadow-lg w-full mt-3 p-3 rounded bg-blue-500 hover:bg-blue-600'><p className='font-bold'>Submit</p></button>
            </form>
        </div>
    )
}

export default Contact