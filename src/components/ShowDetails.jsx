// components/ShowDetails.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams(); // Corrected destructuring

  const [show, setShow] = useState({});
  const [isFormOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    movieName: "",
    // Add other relevant details as needed
  });

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => setShow(response.data))
      .catch((error) => console.error(error));
  }, [id, setShow]);

  const handleOpenForm = () => {
    // Set form data, e.g., movieName
    setFormData({
      movieName: show.name,
      // Add other relevant details as needed
    });
    setFormOpen(true);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Handle form submission logic, e.g., booking the ticket
    console.log("Form submitted with data:", formData);
    // Close the form
    setFormOpen(false);
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <Link to="/" className="text-4xl font-bold mb-4 ">
          {" "}
          TV Shows
        </Link>
      </div>
      <div className="container mx-auto mt-8 flex">
        <img
          src={show.image && show.image.original}
          alt="logo"
          className="h-[30%] w-[30%] text-center rounded-md "
        />
        <div className="mx-[5%]">
          <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: show.summary }}
            className="text-xl"
          />
          <div className="flex gap-3">
            <p className="text-xl my-2 text-gray-400">
              Premiered: {show.premiered}
            </p>
            <p className="text-xl my-2 text-gray-400">
              Average Runtime: {show.averageRuntime}
            </p>
            <p className="text-xl my-2 text-gray-400">
              Language: {show.language}
            </p>
          </div>
          <button
            onClick={handleOpenForm}
            className="block w-[20%] mt-[2rem] rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Book Movie Ticket
          </button>
        </div>

        {/* Form overlay */}
        {isFormOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md">
              <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                  <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Book Movie Tickety
                  </h1>

                  <form
                    onSubmit={handleSubmitForm}
                    action=""
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                  >
                    <div>
                      <label className="block mb-2">
                        Movie Name
                        <input
                          type="text"
                          value={formData.movieName}
                          readOnly
                          className="border p-2 w-full"
                        />
                      </label>
                      <label htmlFor="" className="sr-only">
                        Email
                      </label>

                      <div className="relative">
                        <input
                          type="date"
                          className="w-full rounded-lg border-gray-200 p-4 pe-3 text-sm shadow-sm"
                          placeholder="Enter email"
                        />

                        
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>

                      <div className="relative">
                        <input
                          type="time"
                          className="w-full rounded-lg border-gray-200 p-4 pe-3 text-sm shadow-sm"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="number" className="sr-only">
                        Number of tickets
                      </label>

                      <div className="relative">
                        <input
                          type="number"
                          className="w-full rounded-lg border-gray-200 p-4 pe-3 text-sm shadow-sm"
                          placeholder="Number for tickets"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="number" className="sr-only">
                        Enter Email
                      </label>

                      <div className="relative">
                        <input
                          type="email"
                          className="w-full rounded-lg border-gray-200 p-4 pe-3 text-sm shadow-sm"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowDetails;
