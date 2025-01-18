import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center "
      id="contact"
    >
      <ul>
        <li className="flex">
          <AiFillLinkedin className="w-[70px] h-auto text-gray-300" size={30} />
          <div className="m-5">
            <h3 className="text-lg font-bold text-gray-200">Contact</h3>
            <p className="text-gray-400">Moblie xxx</p>
            <p className="text-gray-400">Email xxx</p>
          </div>
        </li>

        <li className="flex">
          <AiFillGithub className="w-[70px] h-auto text-gray-300" size={30} />
          <div className="m-5">
            <h3 className="text-lg font-bold text-gray-200">Working Houes</h3>
            <p className="text-gray-400">Mo-Fri xxx</p>
            <p className="text-gray-400">Set-Sun 10am-5pm</p>
          </div>
        </li>
      </ul>

      <form action="https://getform.io/f/akkkqkqa" method="POST" className="max-w-6xl my-12  " id="form">
        <input
          type="text"
          id="name"
          placeholder="Your Name..."
          name="name"
          className="mb-4 w-full rounded-md border-gray-400 py-2 pl-2 pr-4"
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email..."
          name="email"
          className="mb-4 w-full rounded-md border-gray-400 py-2 pl-2 pr-4"
        />{" "}
        <textarea
          type="textarea"
          id="textarea"
          cols={30}
          rows={4}
          placeholder="Your Massage..."
          className="mb-4 w-full rounded-md border-gray-400 py-2 pl-2 pr-4"
        ></textarea>
        <button className=" w-full py-3 rounded-md text-gray-200 font-semibold text-xl
        bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]">Send Massage</button>
      </form>
    </div>
  );
};

export default Contact;
