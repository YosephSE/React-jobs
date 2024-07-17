import React from 'react'
import Job from './Job'
import jobs from '../jobs.json'

const JobListings = () => {
  const jobsList = jobs.jobs.slice(0, 3)
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        { jobsList.map((job) => (
          <Job id={job.id} key={job.id} type={job.type}  title={job.title} desc={job.description} location={job.location} salary={job.salary} />
        ))}
          
        </div>
      </div>
    </section>
  )
}

export default JobListings
