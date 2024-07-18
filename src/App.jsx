import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'


const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<p>Hello world</p>} />)
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App
