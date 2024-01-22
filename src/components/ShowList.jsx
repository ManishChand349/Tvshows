// components/ShowList.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all")
      .then(response => setShows(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="max-w-[80%] mx-auto  mt-8">
      <h1 className="text-4xl font-bold mb-4 text-center">TV Shows</h1>
      
      <ul className="grid grid-cols-1 gap-2 text-lg text-gray-800 mb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {shows.map((show) => (
          <li key={show.show.id} className="mb-4 mx-auto">
            <Link to={`/show/${show.show.id}`} className="h-56 w-full rounded-md object-cover">
            <img src={show.show.image && show.show.image.medium} alt="" className="object-cover sm:h-80 lg:h-96  rounded-lg" />
            </Link>
             <h1 className="my-4 text-lg font-bold text-gray-900 sm:text-xl">
             {show.show.name}
             </h1> 
            <div className="flex gap-20">
            <p  className="text-xl my-2 text-gray-400"> Rating <br />{` ${show.show.rating.average}`}</p>
             <p  className="text-xl my-2 text-gray-400">Genres <br /> <span> {` ${show.show.genres}`}</span> </p>
            </div>
            <Link to={`/show/${show.show.id}`} className="mt-2 max-w-sm text-blue-400">Summary more</Link>
          </li>
        ))}
      </ul>
      

    </div>
  );
};

export default ShowList;
