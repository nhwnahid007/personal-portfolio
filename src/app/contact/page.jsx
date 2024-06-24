"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formError, setFormError] = useState({});
  const text = "Say Hello";

  const form = useRef();

  const validateForm = () => {
    const formData = new FormData(form.current);
    const errors = {};

    if (!formData.get("user_name")) {
      errors.user_name = "Name is required.";
    }
    if (!formData.get("user_email")) {
      errors.user_email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("user_email"))) {
      errors.user_email = "Email address is invalid.";
    }
    if (!formData.get("user_message")) {
      errors.user_message = "Message is required.";
    }

    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="lg:flex-grow lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-8 sm:p-12 lg:p-24"
        >
          <span>My name is:</span>
          <input
            name="user_name"
            type="text"
            placeholder="Enter Your Name"
            className="bg-transparent p-3 border-2 rounded-lg border-slate-400 outline-none"
          />
          {formError.user_name && (
            <span className="text-red-600">{formError.user_name}</span>
          )}
          <span>My email address is:</span>
          <input
            name="user_email"
            type="email"
            placeholder="Enter Your Email"
            className="bg-transparent p-3 border-2 rounded-lg border-slate-400 outline-none"
          />
          {formError.user_email && (
            <span className="text-red-600">{formError.user_email}</span>
          )}
          <span>Dear Nahid,</span>
          <textarea
            rows={6}
            placeholder="Write Your Message here..."
            className="h-full p-3 bg-transparent border-2 rounded-lg border-slate-400 outline-none resize-none"
            name="user_message"
          />
          {formError.user_message && (
            <span className="text-red-600">{formError.user_message}</span>
          )}
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
