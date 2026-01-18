import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xreepyzz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setLoading(false);
        setStatus({ type: "success", message: "Success! Your message has been sent." });
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        const data = await response.json();
        setLoading(false);
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      setLoading(false);
      setStatus({ type: "error", message: "Failed to send. Please check your connection." });
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col items-center w-full max-w-7xl mx-auto'>
      {/* Premium Header Decoration */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        {/* Open to Opportunities Badge */}
        <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 ${isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
          }`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-wide">Open to Opportunities</span>
        </div>

        {/* Main Heading */}
        <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight ${isLight ? 'text-[#0D2440]' : 'text-white'
          }`}>
          Let's Build Something Together
        </h2>

        {/* Details Text */}
        <div className={`flex flex-col gap-2 text-sm sm:text-lg font-medium ${isLight ? 'text-gray-600' : 'text-gray-400'
          }`}>
          <p>Looking for SDE / Full Stack Developer roles • Available to start immediately</p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-rose-500">📍</span> India • Open to Remote & On-site
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-8">
          <a
            href="https://github.com/NikhilMamilla"
            target="_blank"
            rel="noreferrer"
            className={`text-3xl transition-all duration-300 hover:scale-125 ${isLight ? 'text-gray-900 hover:text-black' : 'text-gray-400 hover:text-white'
              }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nikhilmamilla"
            target="_blank"
            rel="noreferrer"
            className={`text-3xl transition-all duration-300 hover:scale-125 ${isLight ? 'text-[#0077b5] hover:text-[#006097]' : 'text-[#0077b5] hover:text-[#00a0dc]'
              }`}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div
        className={`p-8 rounded-2xl w-full max-w-4xl border ${isLight ? 'bg-[#F0F6FC] border-[#2E5E99]/50' : 'bg-[#0e0e0e] border-gray-300/20'}`}
      >
        <p className={`${styles.sectionSubText} ${isLight ? '!text-[#7BA4D0]' : ''}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} ${isLight ? '!text-[#0D2440]' : ''}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className={`font-medium mb-2 ${isLight ? 'text-[#0D2440]' : 'text-gray-300'}`}>Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`py-3 px-4 rounded-lg outline-none border transition-colors duration-300 ${isLight ? 'bg-[#F0F6FC] placeholder:text-[#0D2440] text-[#0D2440] border-[#2E5E99]/50 focus:border-[#2E5E99] focus:ring-4 focus:ring-[rgba(46,94,153,0.25)]' : 'bg-[#1a1a1a] placeholder:text-gray-500 text-white border-gray-300/30 focus:border-[#4cdef5]/50'} ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className={`font-medium mb-2 ${isLight ? 'text-[#0D2440]' : 'text-gray-300'}`}>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`py-3 px-4 rounded-lg outline-none border transition-colors duration-300 ${isLight ? 'bg-[#F0F6FC] placeholder:text-[#0D2440] text-[#0D2440] border-[#2E5E99]/50 focus:border-[#2E5E99] focus:ring-4 focus:ring-[rgba(46,94,153,0.25)]' : 'bg-[#1a1a1a] placeholder:text-gray-500 text-white border-gray-300/30 focus:border-[#4cdef5]/50'} ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className={`font-medium mb-2 ${isLight ? 'text-[#0D2440]' : 'text-gray-300'}`}>Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Type your message here...'
              className={`py-3 px-4 rounded-lg outline-none border transition-colors duration-300 resize-none ${isLight ? 'bg-[#F0F6FC] placeholder:text-[#0D2440] text-[#0D2440] border-[#2E5E99]/50 focus:border-[#2E5E99] focus:ring-4 focus:ring-[rgba(46,94,153,0.25)]' : 'bg-[#1a1a1a] placeholder:text-gray-500 text-white border-gray-300/30 focus:border-[#4cdef5]/50'} ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
          </label>

          <button
            type='submit'
            className={`${isLight ? 'py-2 px-6 rounded-full text-white bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0]' : 'animated-border py-2 px-6 outline-none text-white shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]'} w-fit mx-auto font-bold transition-all duration-300`}
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

