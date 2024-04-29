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
      <div className="flex flex-col md:flex-row mt-6">
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-auto md:h-full object-cover rounded-sm"
            alt="Feedback Image"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 ">
          <div className="bg-white rounded-md shadow-md leading-7">
            <h2 className="text-lg font-semibold mb-4 ">Feedback</h2>
            <div className="mb-4 ">
              <p className="mb-2">
                How would you describe your mood after using our Website for the
                first time?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handelfaces("😃")}
                  className="bg-gray-300 hover:bg-green-600 text-white py-2 px-4 rounded-full mr-2">
                  {currentEmoji === "😃" ? "😃" : "Select"}😃
                </button>
                <button
                  onClick={() => handelfaces("😐")}
                  className="bg-gray-300 hover:bg-yellow-600 text-white py-2 px-4 rounded-full mr-2">
                  {currentEmoji === "😐" ? "😐" : "Select"}😐
                </button>
                <button
                  onClick={() => handelfaces("😞")}
                  className="bg-gray-300 hover:bg-red-600 text-white py-2 px-4 rounded-full">
                  {currentEmoji === "😞" ? "😞" : "Select"}😞
                </button>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2">
                How would you rate the quality of our product?
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handelQ("1")}
                  className="bg-gray-200 hover:bg-green-300 text-gray-700 py-2 px-4 rounded-full mr-2
                  ">
                  {quality == "1" ? "1" : "Select"}
                </button>
                <button
                  onClick={() => handelQ("2")}
                  className="bg-gray-200 hover:bg-yellow-200 text-gray-700 py-2 px-4 rounded-full mr-2">
                  {quality == "2" ? "2" : "Select"}
                </button>
                <button
                  onClick={() => handelQ("3")}
                  className="bg-gray-200 hover:bg-yellow-500 text-gray-700 py-2 px-4 rounded-full mr-2">
                  {quality == "3" ? "3" : "Select"}
                </button>
                <button
                  onClick={() => handelQ("4")}
                  className="bg-gray-200 hover:bg-green-600 text-gray-700 py-2 px-4 rounded-full mr-2">
                  {quality == "4" ? "4" : "Select"}
                </button>
                <button
                  onClick={() => handelQ("5")}
                  className="bg-gray-200 hover:bg-green-600 text-gray-700 py-2 px-4 rounded-full">
                  {quality == "5" ? "5" : "Select"}
                </button>
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
                  className="w-full md:w-[400px] lg:w-[500px] border-slate-200 rounded-md focus:border-purple-500 focus:ring focus:ring-purple-200 shadow-lg placeholder-center text-center"
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
