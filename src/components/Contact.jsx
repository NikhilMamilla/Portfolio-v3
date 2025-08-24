import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
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
        className='bg-[#0e0e0e] p-8 rounded-2xl border border-gray-300/20 w-full max-w-4xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-gray-300 font-medium mb-2'>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`bg-[#1a1a1a] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border ${errors.name ? 'border-red-500' : 'border-gray-300/30'} focus:border-[#4cdef5]/50 transition-colors duration-300`}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-300 font-medium mb-2'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`bg-[#1a1a1a] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border ${errors.email ? 'border-red-500' : 'border-gray-300/30'} focus:border-[#4cdef5]/50 transition-colors duration-300`}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-300 font-medium mb-2'>Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message here...'
              className={`bg-[#1a1a1a] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg outline-none border ${errors.message ? 'border-red-500' : 'border-gray-300/30'} focus:border-[#4cdef5]/50 transition-colors duration-300 resize-none`}
            />
            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
          </label>

          <button
            type='submit'
            className='animated-border py-2 px-6 outline-none w-fit mx-auto text-white font-bold shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)] transition-all duration-300'
            disabled={loading}
            style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            <div className="text-center">
              {loading ? "Sending..." : "Send Message"}
            </div>
          </button>
          {status.message && (
            <div className={`mt-2 text-center text-sm font-medium ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{status.message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact"); 