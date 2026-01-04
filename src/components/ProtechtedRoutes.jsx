import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

const ProtechtedRoutes = () => {

    const token = localStorage.getItem('token')

  return token ? <Outlet /> : <Navigate to='/login' replace  />
}

export default ProtechtedRoutes
