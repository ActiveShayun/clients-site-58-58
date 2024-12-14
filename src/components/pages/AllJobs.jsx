import { useEffect, useState } from "react";
import JobCard from "./JobCard";


const AllJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    console.log(jobs);
    return (
        <div className="mt-20">
            <h2 className="text-3xl font-semibold text-center mb-5">All jobs here</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    jobs.map(job =>
                        <JobCard
                            key={job._id}
                            job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;