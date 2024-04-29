import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FeedBack() {
  const [feedback, setFeedback] = useState("");
  const [currentEmoji, setCurrentEmoji] = useState("😃");
  const [quality, SetQuality] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    const input = feedback.length;
    if (input >= 10) {
      toast.success("Thanks for sharing with us");
    } else {
      // Display an error toast if feedback is too short
      toast.error("Please provide feedback of at least 10 characters.");
    }
    console.log("data", feedback);
    // Assuming the submission is successful
    setFeedback("");
  };

  function handelfaces(emogi) {
    setCurrentEmoji(emogi);
  }

  function handelQ(Num) {
    SetQuality(Num);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-auto md:h-full object-cover rounded-sm"
            alt="Feedback Image"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="rounded-md leading-7">
            <h2 className="text-lg font-semibold mb-4">Feedback</h2>
            <div className="mb-4 ">
              <p className="mb-2 text-wrap">
                How would you describe your mood after using our Website for the
                first time?
              </p>
              <div className="flex gap-4">
                <svg
                  onClick={() => {
                    console.log("Happy clicked");
                    handelfaces("happy");
                  }}
                  className={`cursor-pointer ${
                    currentEmoji === "happy"
                      ? "text-green-600 fill-green-600"
                      : "hover:text-green-600 hover:fill-green-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width="100"
                  height="100">
                  <path
                    className={
                      currentEmoji === "happy"
                        ? "fill-green-600"
                        : "hover:fill-green-600"
                    }
                    d="M35.56 49.964a1.75 1.75 0 0 0 1.75-1.75 6.477 6.477 0 1 1 12.954 0 1.75 1.75 0 0 0 3.5 0 9.977 9.977 0 1 0-19.954 0 1.75 1.75 0 0 0 1.75 1.75zM75.986 49.964a1.75 1.75 0 0 0 1.75-1.75 6.477 6.477 0 1 1 12.954 0 1.75 1.75 0 0 0 3.5 0 9.977 9.977 0 1 0-19.954 0 1.75 1.75 0 0 0 1.75 1.75z"
                  />
                  <path
                    className={
                      currentEmoji === "happy"
                        ? "fill-green-600"
                        : "hover:fill-green-600"
                    }
                    d="M64 4.75a59.863 59.863 0 1 0 59.863 59.863A59.931 59.931 0 0 0 64 4.75zm0 116.227a56.363 56.363 0 1 1 56.363-56.363A56.427 56.427 0 0 1 64 120.977z"
                  />
                  <path
                    className={
                      currentEmoji === "happy"
                        ? "fill-green-600"
                        : "hover:fill-green-600"
                    }
                    d="M113.044 74.3a11.817 11.817 0 0 0-5.283-3.131c-.015 0-.027-.011-.042-.015h-.026a14.489 14.489 0 0 0-6.057-.516 1.75 1.75 0 1 0 .573 3.453 10.032 10.032 0 0 1 2.908.063 42.827 42.827 0 0 1-41.107 30.6h-.14a42.827 42.827 0 0 1-41.1-30.582 10.161 10.161 0 0 1 3.023-.081 1.75 1.75 0 1 0 .573-3.453 14.443 14.443 0 0 0-5.92.477 1.531 1.531 0 0 0-.717.225 11.576 11.576 0 0 0-4.773 2.96 1.75 1.75 0 1 0 2.558 2.389 7.271 7.271 0 0 1 1.924-1.441 46.324 46.324 0 0 0 44.432 33h.14a46.325 46.325 0 0 0 44.45-33.059 7.338 7.338 0 0 1 2.026 1.5 1.75 1.75 0 0 0 2.558-2.389z"
                  />
                </svg>

                <svg
                  onClick={() => {
                    console.log("Neutral clicked");
                    handelfaces("neutral");
                  }}
                  className={`cursor-pointer ${
                    currentEmoji === "neutral"
                      ? "text-yellow-600 fill-yellow-600"
                      : "hover:text-yellow-600 hover:fill-yellow-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100"
                  height="100">
                  <path
                    className={
                      currentEmoji === "neutral"
                        ? "fill-yellow-600"
                        : "hover:fill-yellow-600"
                    }
                    d="M10 9v2a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm5-1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1zm8 4A11 11 0 1 1 12 1a11.013 11.013 0 0 1 11 11zm-2 0a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9z"
                  />
                </svg>

                <svg
                  onClick={() => {
                    console.log("Not satisfied clicked");
                    handelfaces("not_satisfied");
                  }}
                  className={`cursor-pointer ${
                    currentEmoji === "not_satisfied"
                      ? "text-red-600 fill-red-600"
                      : "hover:text-red-600 hover:fill-red-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100"
                  height="100">
                  <path
                    className={
                      currentEmoji === "not_satisfied"
                        ? "fill-red-600"
                        : "hover:fill-red-600"
                    }
                    d="M16.775 16.368a1 1 0 0 1-1.55 1.264 4 4 0 0 0-6.45 0 1 1 0 1 1-1.55-1.264 6 6 0 0 1 9.55 0zM23 12A11 11 0 1 1 12 1a11.013 11.013 0 0 1 11 11zm-2 0a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9zm-4-3a1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0 1 1 0 0 0-2 0zm-6 0a1 1 0 0 0-2 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0 3 3 0 0 0 6 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2">
                How would you rate the quality of our product?
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => handelQ(num.toString())}
                    className={`bg-gray-200 hover:bg-green-600 text-gray-700 py-2 px-4 rounded-full ${
                      quality === num.toString()
                        ? "bg-green-600 text-white"
                        : ""
                    }`}>
                    {num}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-2 text-slate-700 text-2xl ">
                Which feature is the best for you?
              </p>
              <div className="flex gap-4 flex-col ">
                <div className="flex items-center gap-2 w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-indigo-600 peer-checked:ring-2 duration-200 ">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-purple-600 "
                  />
                  <label className="text-gray-700">
                    Integration options and tools
                  </label>
                </div>
                <div className="flex items-center gap-2 w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-indigo-600 peer-checked:ring-2 duration-200">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-purple-600 "
                  />
                  <label className="text-gray-700">
                    The advanced search functionality
                  </label>
                </div>
                <div className="flex items-center gap-2 w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-indigo-600 peer-checked:ring-2 duration-200">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-purple-600"
                  />
                  <label className="text-gray-700">
                    The customizable settings
                  </label>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <p className="mb-2 text-lg">Your feedback</p>
                <textarea
                  className="w-full border-slate-200 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200 shadow-lg placeholder-center text-center"
                  rows="10"
                  placeholder="Anything you'd like to add? Your input is valuable to us."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit(e);
                    }
                  }}></textarea>
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white py-3 px-6 rounded-md text-lg w-full max-w-[31rem] hover:bg-blue-800">
                  Send Feedback
                </button>
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  gutter={8}
                  containerClassName=""
                  containerStyle={{}}
                  toastOptions={{
                    success: {
                      duration: 3500,
                      theme: {
                        primary: "green",
                        secondary: "black",
                      },
                    },
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
