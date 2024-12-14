import { useEffect, useState } from "react";
import useContextHooks from "../hooks/Hooks";


const MyApplications = () => {
    const { user } = useContextHooks()
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [user.email])
    return (
        <div>
            <h3>all applications{jobs.length}</h3>
        </div>
    );
};

export default MyApplications;