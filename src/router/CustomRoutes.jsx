import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowList from "../components/ShowList";
import ShowDetails from "../components/ShowDetails";

function CustomRoutes() {
  return (
    <Routes>
     <Route path='/' element={<ShowList/>}/>
     <Route path="/show/:id" element={<ShowDetails/>}/>
    </Routes>
  )
}

export default CustomRoutes