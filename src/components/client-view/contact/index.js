"use client";

import { useEffect, useState } from "react";
import AnimationWrapper from "../animation-wrapper";
import { addData } from "@/services";
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const controls = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Enter your message",
    type: "text",
    label: "Message",
  },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ClientContactView() {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");

  async function handleSendMessage() {
    setButtonText("Sending...");
    const res = await addData("contact", formData);

    if (res && res.success) {
      setFormData(initialFormData); // Clear form data immediately after message is sent
      setShowSuccessMessage(true);
    }
    setButtonText("Send Message");
  }

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1500);
    }
  }, [showSuccessMessage]);

  const isValidForm = () => {
    return formData && formData.name !== "" && formData.email !== "" && formData.message !== "" ? true : false;
  };


  return (
<<<<<<< HEAD
    <div className="max-w-screen-xl pt-20 pb-2 px-6 sm:px-8 lg:px-16 mx-auto" id="contact">
=======
    <div className="max-w-screen-xl pt-16 pb-2 px-6 sm:px-8 lg:px-16 mx-auto" id="contact">
>>>>>>> 126e597 (Shanged some styles and added certificates)
      <AnimationWrapper className={"py-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"Contact Me".split(" ").map((item, index) => (
<<<<<<< HEAD
              <span className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}>{item} </span>
=======
              <span className={`${index === 1 ? "text-green-main stylish" : "text-[#000]"}`}>{item} </span>
>>>>>>> 126e597 (Shanged some styles and added certificates)
            ))}
          </h1>
        </div>
      </AnimationWrapper>
      <div className="text-gray-500 relative">
        <div className="container md:px-5">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Contact Information */}
            <div className="md:py-8 md:px-10 rounded-lg md:shadow-lg">
              <h3 className="md:text-3xl text-xl font-bold mb-10 underline text-green-500 text-center">Basic Information</h3>
              <div className="grid grid-cols-1 gap-6 md:text-xl text-lg">
                <p>
                  <FaUserAlt className="inline mr-2 text-green-500" />
                  <strong className="text-green-500">Name:</strong> Tasneem Al Sahat
                </p>
                <p>
                  <FaMapMarkerAlt className="inline mr-2 text-green-500" />
                  <strong className="text-green-500">Location:</strong> Dhaka, Bangladesh
                </p>
                <p>
                  <FaPhoneAlt className="inline mr-2 text-green-500" />
                  <strong className="text-green-500">Number:</strong> +8801735746159
                </p>
                <p>
                  <FaEnvelope className="inline mr-2 text-green-500" />
                  <strong className="text-green-500">Email:</strong> mdsahat6397@gmail.com
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="p-2">
              <div className="flex flex-wrap -m-2">
                {controls.map((controlItem) =>
                  controlItem.name === "message" ? (
                    <div className="p-2 w-full" key={controlItem.name}>
                      <div className="relative">
                        <label className="text-sm text-[#000]">{controlItem.label}</label>
                        <textarea
                          id={controlItem.name}
                          name={controlItem.name}
                          value={formData[controlItem.name]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [controlItem.name]: e.target.value,
                            })
                          }
                          className="w-full border-green-main shadow border-[2px] bg-[#ffffff] rounded h-48 text-base outline-none text-[#000000] py-3 px-3 resize-none leading-6"
                        ></textarea>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2 w-full" key={controlItem.name}>
                      <div className="relative">
                        <label className="text-sm text-[#000]">{controlItem.label}</label>
                        <input
                          id={controlItem.name}
                          name={controlItem.name}
                          value={formData[controlItem.name]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [controlItem.name]: e.target.value,
                            })
                          }
                          className="w-full border-green-main shadow border-[2px] bg-[#ffffff] rounded text-base outline-none text-[#000000] py-3 px-3 leading-6"
                        />
                      </div>
                    </div>
                  )
                )}
                
                {/* Success message before the button */}
                {showSuccessMessage && (
                  <p className="text-[14px] font-bold my-[8px] text-green-500">
                    Your message is successfully delivered!
                  </p>
                )}
                
                <div className="p-2 w-full">
                  <button
                    disabled={!isValidForm()}
                    onClick={handleSendMessage}
                    className="disabled:opacity-50 shadow-xl py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg text-2xl tracking-widest bg-green-main outline-none"
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
