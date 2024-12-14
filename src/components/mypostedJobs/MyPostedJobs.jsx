import { useEffect, useState } from "react";
import useContextHooks from "../hooks/Hooks";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([])
    const { user } = useContextHooks()

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    return (
        <div>
            <h2 className="text-3xl">posted jobs{jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job title</th>
                            <th>location</th>
                            <th>Deadline</th>
                            <th>Application count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map((job, idx) => <tr key={job._id}>
                                <th>{idx +1}</th>
                                <td>{job.title}</td>
                                <td>{job.location}</td>
                                <td>{job.date}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/job-application/${job._id}`}>
                                    <button className="btn">View Applications</button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPostedJobs;