import { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Job = ({ id, type, title, desc, salary, location }) => {
  const [showDetailDesc, setShowDetailDesc] = useState(true);
  let shortDesc = desc.split(" ").slice(0, 25).join(" ") + " ...";
  function toggleShow() {
    setShowDetailDesc((prev) => !prev);
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{type}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="mb-5 text-justify">{showDetailDesc ? shortDesc : desc}</div>
        <button
          className="text-indigo-500 mb-5 hover:text-indigo-600"
          onClick={toggleShow}
        >
          {showDetailDesc ? "More" : "Less"}
        </button>

        <h3 className="text-indigo-500 mb-2">{salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaLocationPin className="inline mr-2 mb-1 text-lg" />
            {location}
          </div>
          <Link
            to={`/job/${id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
