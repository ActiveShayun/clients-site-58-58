import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { _id, skills, title, description, jobType, salaryRance, date, company, location, deadline, requirements, email } = job
    return (
        <div className="card shadow-lg ">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex gap-2 flex-wrap'>
                    {skills.map(skill => <p className='text-center border rounded-lg'>{skill}</p>)}
                </div>
                <p>{jobType}</p>
                <p>{date}</p>
                <p>{company}</p>
                <p>{location}</p>
                <p>{deadline}</p>
                <p>{requirements}</p>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;