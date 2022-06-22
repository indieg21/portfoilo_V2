import Emailsvg from './Svgs/mailbox.svg';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    if (form.current.value) {
      emailjs
        .sendForm(
          'service_d3wk6zm',
          'template_xwaiyjd',
          e.target,
          'TUBUI6t9nQhCg_xJ9'
        )
        .then(
          result => {
            console.log(result.text);
            alert(
              'Your Message has been Sent! You will recieve a response in less than 24hrs'
            );
          },
          error => {
            console.log(error.text);
            alert(`Error: Couldn't send the message`);
          }
        );
    } else {
      alert('enter something');
    }
  }

  return (
    <>
      <div
        id='contact'
        className='h-screen mt-96 lg:mt-0 text-gray-100 px-8 py-12 flex '
      >
        <div className='w-[95%] mt-24 px-8 grid gap-24 grid-cols-1 md:grid-row lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900  dark:text-white rounded-lg '>
          <div className='grid grid-flow-row  justify-between'>
            <div>
              <h2 className='text-4xl lg:text-5xl font-bold leading-tight'>
                Lets talk about everything!
              </h2>
            </div>
            <div className='mt-8 lg:mt-0 text-center hidden xl:block scale-90 '>
              <Emailsvg />
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div>
              <span className='uppercase text-sm text-gray-600  dark:text-white font-bold'>
                Full Name
              </span>
              <input
                className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg  focus:outline-none focus:shadow-outline'
                type='text'
                name='user_name'
                ref={form}
                placeholder=''
              />
            </div>
            <div className='mt-8'>
              <span className='uppercase text-sm text-gray-600 font-bold  dark:text-white'>
                Email
              </span>
              <input
                className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                type='email'
                name='user_email'
                ref={form}
              />
            </div>
            <div className='mt-8'>
              <span className='uppercase text-sm text-gray-600 font-bold  dark:text-white'>
                Message
              </span>
              <textarea
                name='message'
                ref={form}
                className='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
              ></textarea>
            </div>
            <div className='mt-8'>
              <button className='uppercase text-sm font-bold tracking-wide bg-black text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
