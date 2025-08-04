import React, {useContext, useState} from 'react';
// // import images
// import WomanImg from '../img/contact/woman.png';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
// import { CursorContext } from '../context/CursorContext'; 
// import emailjs
import emailjs from 'emailjs-com';

const Contact = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = () => {
    const phone = '919137294731';
    const message = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_lz258js',     
      'template_aypimw7',    
      form,
      '8uhI4OsdnAKGUK6bK'         
    )
    .then(() => {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      alert('Something went wrong. Please try again.');
    });
  };
  

  return (
  <motion.section 
  initial={{ opacity: 0, y: '100%' }} 
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: '100%' }} 
  transition={transition1}
  className='section bg-white fixed top-[100px] left-0 w-screen h-[calc(100vh-100px)] overflow-hidden z-50'>
  <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-8 text-center lg:text-left py-0 h-full'>
    {/* bg */}
    <motion.div 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }} 
      transition={transition1}
      className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
    </motion.div>
    {/* text & form */}
    <div 
      className='lg:flex-1 px-14 flex flex-col justify-center'>
      <h1 className='h1 mb-2'>Contact me</h1>
      <p className='mb-6'>I would love to get suggestions from you.</p>
      {/* form */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
        <div className='flex-gap-x-10'>
          <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
            type='text'
            name='name'
            placeholder='Your name' 
            value={form.name}
            onChange={handleChange}
            required/>
          <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
            type='text'
            name='email'
            placeholder='Your email address' 
            value={form.email}
            onChange={handleChange}
            required/>
        </div>
        <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
          type='text'
          name='message'
          placeholder='Your message' 
          value={form.message}
          onChange={handleChange}
          required/>
        <button
          type='button'
          onClick={handleWhatsAppSend}
          className='btn mb-[10px] mx-auto lg:mx-0 self-start'
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
    {/* image */}
    <motion.div 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }} 
      transition={{transition: transition1, duration: 1}}
      className='lg:flex-1 flex items-center justify-center'>
      <img src="/images/contact/woman.png" alt='' />
    </motion.div>
  </div>
</motion.section>
  );
};

export default Contact;