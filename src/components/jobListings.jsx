import React from "react";
import Job from "./Job";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (e) {
        console.log("Error while fetching data", e);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
       
          {loading ? (
            <Spinner  loading={loading}/>
          ) : (
            <>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Job
                  id={job.id}
                  key={job.id}
                  type={job.type}
                  title={job.title}
                  desc={job.description}
                  location={job.location}
                  salary={job.salary}
                />
              ))}
              </div>
            </>
          )}
        </div>
    </section>
  );
};

export default JobListings;
