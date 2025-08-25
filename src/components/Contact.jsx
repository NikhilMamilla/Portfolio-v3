import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = ({ theme = "dark" }) => {
  const isLight = theme === "light";
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    // Clear status message when user starts typing
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  // Validate form
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Nikhil Mamilla",
        from_email: form.email,
        to_email: "23211a05m7@bvrit.ac.in",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setStatus({ type: "success", message: "Thank you! I will get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }, (error) => {
      setLoading(false);
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
      console.error(error);
    });
  };

  return (
    <div className="flex justify-center items-center pl-0 overflow-x-hidden">
      <div
        className={`p-8 rounded-2xl w-full max-w-4xl border ${isLight ? 'bg-[#fff5f2] border-[#e2e8f0]' : 'bg-[#0e0e0e] border-gray-300/20'}`}
      >
        <p className={`${styles.sectionSubText} ${isLight ? '!text-[#9CAF88]' : ''}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} ${isLight ? '!text-[#4a4a4a]' : ''}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className={`font-medium mb-2 ${isLight ? 'text-[#4a4a4a]' : 'text-gray-300'}`}>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`py-3 px-4 rounded-lg outline-none border transition-colors duration-300 ${isLight ? 'bg-[#fff5f2] placeholder:text-[#6b9080] text-[#4a4a4a] border-[#e2e8f0] focus:border-[#0FA3B1] focus:ring-4 focus:ring-[rgba(15,163,177,0.2)]' : 'bg-[#1a1a1a] placeholder:text-gray-500 text-white border-gray-300/30 focus:border-[#4cdef5]/50'} ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className={`font-medium mb-2 ${isLight ? 'text-[#4a4a4a]' : 'text-gray-300'}`}>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`py-3 px-4 rounded-lg outline-none border transition-colors duration-300 ${isLight ? 'bg-[#fff5f2] placeholder:text-[#6b9080] text-[#4a4a4a] border-[#e2e8f0] focus:border-[#0FA3B1] focus:ring-4 focus:ring-[rgba(15,163,177,0.2)]' : 'bg-[#1a1a1a] placeholder:text-gray-500 text-white border-gray-300/30 focus:border-[#4cdef5]/50'} ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className={`font-medium mb-2 ${isLight ? 'text-[#4a4a4a]' : 'text-gray-300'}`}>Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message here...'
              className={`py-3 px-4 rounded-lg outline-none border transition-colors duration-300 resize-none ${isLight ? 'bg-[#fff5f2] placeholder:text-[#6b9080] text-[#4a4a4a] border-[#e2e8f0] focus:border-[#0FA3B1] focus:ring-4 focus:ring-[rgba(15,163,177,0.2)]' : 'bg-[#1a1a1a] placeholder:text-gray-500 text-white border-gray-300/30 focus:border-[#4cdef5]/50'} ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
          </label>

          <button
            type='submit'
            className={`${isLight ? 'py-2 px-6 rounded-full text-white bg-gradient-to-r from-[#0FA3B1] to-[#9CAF88]' : 'animated-border py-2 px-6 outline-none text-white shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]'} w-fit mx-auto font-bold transition-all duration-300`}
            disabled={loading}
            style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            <div className="text-center">
              {loading ? "Sending..." : "Send Message"}
            </div>
          </button>
          {status.message && (
            <div className={`mt-2 text-center text-sm font-medium ${status.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>{status.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact"); 