import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero title="Become a React dev" subtitle="Find the React hob that fits your skills and needs" />
    <HomeCards />
    <JobListings /> 
    <ViewAllJobs />
    </>
  )
}

export default App
