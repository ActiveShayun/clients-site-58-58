import useContextHooks from "../hooks/Hooks";



const AddJobs = () => {

    const { user } = useContextHooks()
    console.log(user);

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const initialData = Object.fromEntries(form.entries());
        console.log(initialData);

        const { min, max, currency, ...newJob } = initialData
        console.log(newJob);

        newJob.salaryRance = { max, min, currency }
        console.log(newJob);
        newJob.skills = newJob.skills.split(',')

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('job post successful')
                }
            })
    }




    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-[500px] shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center">Add Jobs</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
                            <div>
                                <label className="label">
                                    <span className="label-text">Skills</span>
                                </label>
                                <input
                                    placeholder="Enter tags separated by commas"
                                    name='skills' className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">HR Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name='hr_email' placeholder="hr email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="jon description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <div className='grid grid-cols-3 gap-3'>
                                <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
                                <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
                                <select defaultValue='Pick a currency' className='border rounded-lg' name="currency" id="">
                                    <option disabled>Pick a currency</option>
                                    <option value="bdt">Bdt</option>
                                    <option value="usd">Usd</option>
                                    <option value="ure">Ure</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Type</span>
                            </label>
                            <input type="text" name='jobType' placeholder="job type" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' placeholder="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" name='company' placeholder="company name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name='location' placeholder="location" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <input type="date" name='deadline' placeholder="location" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Requirements</span>
                            </label>
                            <input type="text" name='requirements' placeholder="job requirements" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Jobs</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddJobs;