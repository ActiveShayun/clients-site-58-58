import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData()
    console.log(job);
    const { _id, skills, title, description, jobType, salary, date, company, location, deadline, requirements, email } = job
    return (
        <div className="card shadow-lg ">
            <div className="card-body">
                <h2 className="card-title m-3">{title}</h2>
                <div className='flex gap-2 flex-wrap'>
                    {skills.map(skill => <p className='text-center border rounded-lg'>{skill}</p>)}
                </div>
                <p>{jobType}</p>
                <p>{date}</p>
                <p>{company}</p>
                <p>{location}</p>
                <p>{deadline}</p>
                <p>{requirements}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/jobApply/${_id}`}>
                        <button className="btn">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;