import { useState } from "react";
import { BiMap, BiLogoGmail } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import Title from "./Title";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const data = { name, email, message };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container mx-auto flex flex-col items-center min-h-screen justify-center py-44">
      <div className="mb-28">
        <Title no={"04"} emoji={"✉️"} content={"Contact Me"} />
      </div>
      <div className="flex flex-row justify-center w-10/12 gap-10">
        <form
          className=" w-3/5 shadow-xl rounded-md p-8 flex-1"
          onSubmit={sendEmail}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" border border-gray-300  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex) yong@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="ex) Yonghyun Kim"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" border text-sm rounded-md block w-full h-48 p-2.5"
            />
          </div>
          <button
            type="submit"
            className="text-white border border-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
        <div className="text-white text-lg flex-1">
          <p className="flex items-center gap-4 mb-6">
            <BiMap /> Pyeongtaek City, Gyeonggi Province
          </p>
          <p className="flex items-center gap-4 mb-6 ">
            <BiLogoGmail /> ky8175@gmail.com
          </p>
          <p className="flex items-center gap-4 mb-6">
            <BsPhone /> 010-4144-8175
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
