import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import axiosInstance from '../utls/axiosInstance.js';
import { toast } from 'react-toastify';
import Loader from '../components/Loader.jsx';

const Contact = () => {

  const { authState, navigate } = useContext(Context);

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const sendContactMessage = async (e) => {
        e.preventDefault();
        try {
            if (authState !== 'authenticated') {
                return navigate('/login');
            }

            setLoader(true);
            const response = await axiosInstance.post(`/api/v1/user/send-contact-message`, { name, subject, message });
            if (response.data.success) {
                toast.success(response.data.message);
            }

        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    if (loader) {
        return <Loader />
    }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl">
        
        <h1 className="text-3xl mb-4 text-white">Get in Touch</h1>
        <p className='text-gray-400 text-sm mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium libero aliquid 
            eos similique sed velit, vitae ipsam rerum ut accusantium libero.
        </p>

        <form onSubmit={sendContactMessage} className="space-y-5">
          
          <div>
            <input type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)} value={name}
              className="w-full text-white bg-gray-700 rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)} value={subject}
              className="w-full text-white bg-gray-700 rounded-lg px-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <textarea
              cols="30"
              rows="7"
              placeholder="Type your message ..."
              onChange={(e) => setMessage(e.target.value)} value={message}
              className="w-full text-white bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium">
            Send Message
          </button>

        </form>
        
      </div>
    </div>
  )
}

export default Contact
